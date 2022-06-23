// TODO: duplicated from https://github.com/lahmatiy/react-render-tracker/edit/main/src/publisher/utils/resolveSourceLoc.ts
// once it is published as a standalone npm package, remove this file
import { SourceMapConsumer } from 'source-map-js';

type ChunkStorage = Record<string, () => void>;
type ResolveResult = { source: string; origLine: number; origColumn: number };
type Resolve = (loc: string, line: number, column: number) => ResolveResult | Promise<ResolveResult>;

const cache = new Map<string, ResolveResult | Promise<ResolveResult>>();
const knownWebpackChunks = new Map<string, number>();
const sourceMapsResolve = new Map<string, Resolve | null>();
const noResolve = (loc: string, line: number, column: number) => {
  cache.set(loc, { source: loc, origLine: line, origColumn: column });
  return { source: loc, origLine: line, origColumn: column };
};

// chrome.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name === 'content-script');
//   port.onMessage.addListener(function (msg) {
//     if (msg.id === 'sourceToResolve') {
//       sourceToResolve(msg.filepath, msg.fn);
//       console.log('amber invoke sourceToResolve', msg.filepath, msg.fn);
//     } else if (msg.id === 'finish') {
//       console.log('amber finished');
//     }
//   });
// });

const getResolve =
  (sourceMapConsumer: SourceMapConsumer): Resolve =>
  (loc: string, line: number, column: number) => {
    const {
      source,
      line: origLine,
      column: origColumn,
    } = sourceMapConsumer.originalPositionFor({
      line,
      column,
    });
    console.log('amber originalPositionFor', source);
    const resolvedLoc = source ? { source, origLine, origColumn } : { source: loc, origLine: line, origColumn: column };

    cache.set(loc, resolvedLoc);

    return resolvedLoc;
  };

function sourceToResolve(filepath: string, source: string | (() => any)) {
  const lazyResolve = (loc: string, line: number, column: number) => {
    // const [, sourceMapBase64] = String(source).match(/\/\/# sourceMappingURL=.+?;base64,([a-zA-Z0-9\+\/=]+)/) || [];
    const [, sourceMappingURL] = String(source).match(/\/\/# sourceMappingURL=([^\s'"]+)/) || [];
    let resolve: Resolve = noResolve;

    if (sourceMappingURL) {
      const hasInlineSourceMap = sourceMappingURL.indexOf('base64,') >= 0;

      if (hasInlineSourceMap) {
        console.log('amber hasInlineSourceMap', filepath);
        const sourceMapBase64 = sourceMappingURL.match(/base64,([a-zA-Z0-9+/=]+)/)?.[1] ?? '';

        try {
          console.log('amber sourcemap json', JSON.parse(atob(sourceMapBase64)));
          const sourceMap = new SourceMapConsumer(JSON.parse(atob(sourceMapBase64)));
          resolve = getResolve(sourceMap);
        } catch (e) {
          console.warn('[React Render Tracker] Source map parse error:', e);
        }
      } else {
        let externalsourceMappingURL = sourceMappingURL;
        if (!sourceMappingURL.startsWith('http') && !sourceMappingURL.startsWith('/')) {
          // Resolve paths relative to the location of the file name
          const lastSlashIdx = filepath.lastIndexOf('/');
          if (lastSlashIdx !== -1) {
            const baseURL = filepath.slice(0, lastSlashIdx);
            externalsourceMappingURL = `${baseURL}/${sourceMappingURL}`;
          }
        }

        resolve = async (loc: string, line: number, column: number) => {
          try {
            const response = await fetch(externalsourceMappingURL);
            if (response.ok) {
              const content = await response.text();
              const sourceMap = new SourceMapConsumer(JSON.parse(content));
              return getResolve(sourceMap)(loc, line, column);
            } else {
              console.warn(
                `[React Render Tracker] Unable to fetch source map from ${externalsourceMappingURL}:`,
                response.json(),
              );
            }
          } catch (e) {
            console.warn('[React Render Tracker] Source map parse error:', e);
          }
          return { source: loc, origLine: line, origColumn: column };
        };
      }
    }

    sourceMapsResolve.set(filepath, resolve);

    return resolve ? resolve(loc, line, column) : { source: loc, origLine: line, origColumn: column };
  };

  sourceMapsResolve.set(filepath, lazyResolve);

  return lazyResolve;
}

function asyncSourceToResolve(filepath: string, sourcePromise: Promise<string>) {
  const promiseResolve = sourcePromise
    .then(source => sourceToResolve(filepath, source))
    .catch(() => {
      sourceMapsResolve.set(filepath, noResolve);
      return noResolve;
    });

  sourceMapsResolve.set(filepath, (loc: string, line: number, column: number) => {
    const resolvedLoc = promiseResolve.then(resolve => resolve(loc, line, column));

    cache.set(loc, resolvedLoc);

    return resolvedLoc;
  });
}

function fetchIfNeeded(filepath: string) {
  if (!sourceMapsResolve.has(filepath)) {
    asyncSourceToResolve(
      filepath,
      fetch(filepath).then(res => res.text()),
    );
  }
}

let callback: (filepath: string, line: number, column: number) => void = () => {};
let curr: { filepath: string; loc: string; genLine: number; genColumn: number };
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  if (request.name === 'endGetWebpackChunkObjects') {
    if (request.success) {
      request.result.forEach(({ filepath: webpackFilepath, fn }: any) => {
        if (webpackFilepath === curr.filepath) {
          console.log('amber found matching filepath', curr.filepath, fn);
        }
        sourceToResolve(webpackFilepath, fn);
      });

      fetchIfNeeded(curr.filepath);

      const resolveSourceMap = sourceMapsResolve.get(curr.filepath) || noResolve;
      const resolvedloc = await resolveSourceMap(curr.loc, curr.genLine, curr.genColumn);
      console.log('amber got resolvedloc', resolvedloc);
      callback(resolvedloc.source, resolvedloc.origLine, resolvedloc.origColumn);
    } else {
      callback(curr.filepath, curr.genLine, curr.genColumn);
    }
  }
});

export async function resolveSourceLoc(loc: string, cb: (filepath: string, line: number, column: number) => void) {
  const cachedValue = cache.get(loc);

  if (cachedValue !== undefined) {
    const result = await cachedValue;
    callback(result.source, result.origLine, result.origColumn);
    return;
  }

  const [, filepath, rawLine, rawColumn] =
    loc.replace(/^webpack-internal:\/\/\//, '').match(/^(.+?)(?::(\d+)(?::(\d+))?)?$/) || [];

  console.log('amber filepath', filepath);
  const genLine = rawLine ? parseInt(rawLine, 10) : 1;
  const genColumn = rawColumn ? parseInt(rawColumn, 10) : 1;

  console.log('amber chrome.tabs', chrome.tabs);
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs[0] === undefined) {
    cb(filepath, genLine, genColumn);
    return;
  }

  chrome.tabs.sendMessage(tabs[0].id!, { name: 'extension', filepath }, function (response) {
    console.log('found current tab');
    console.log('extension request result from requesting syncWebpackSourceMapsIfNeeded', response.success);
    if (response.success) {
      callback = cb;
      curr = { filepath, loc, genLine, genColumn };
    }
  });
}
