/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}
injectScript(chrome.runtime.getURL('content-script.js'), 'html');

let webpackDictionary = [];
let filepath;
const handleFromWeb = async event => {
  if (event.data.from === 'endGetWebpackChunkObjects') {
    try {
      if (!webpackDictionary.length) {
        webpackDictionary = syncWebpackSourceMapsIfNeeded(JSON.parse(event.data.data));
      }
      const currentItem = webpackDictionary.find(item => item.filepath === filepath);
      chrome.runtime.sendMessage({ name: 'endGetWebpackChunkObjects', success: true, result: [currentItem] });
      return;
    } catch (error) {
      console.log('amber endGetWebpackChunkObjects error', error);
    }
    console.log(`process from ${event.data.from}`);
  }
  chrome.runtime.sendMessage({ name: 'endGetWebpackChunkObjects', success: false });
};
window.addEventListener('message', handleFromWeb);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.name === 'extension') {
    window.postMessage({
      from: 'startGetWebpackChunkObjects',
    });
    filepath = request.filepath;
    sendResponse({ success: true });
  }
});

let needWebpackSync = true;
const callAsap = typeof requestIdleCallback === 'function' ? requestIdleCallback : fn => Promise.resolve().then(fn);
const knownWebpackChunks = new Map();
function syncWebpackSourceMapsIfNeeded(webpackChunkObjects) {
  if (!needWebpackSync) {
    return;
  }

  needWebpackSync = false;
  callAsap(() => (needWebpackSync = true));

  const result = [];
  for (const name of Object.keys(webpackChunkObjects)) {
    const knownSize = knownWebpackChunks.get(name) || 0;
    const storage = webpackChunkObjects[name];

    if (!Array.isArray(storage)) {
      continue;
    }

    for (let i = knownSize; i < storage.length; i++) {
      const storageEntry = storage[i];

      if (Array.isArray(storageEntry) && storageEntry[1] && typeof storageEntry[1] === 'object') {
        for (const [filepath, fn] of Object.entries(storageEntry[1])) {
          // sourceToResolve(filepath, fn);
          result.push({ filepath, fn });
        }
      }
    }

    knownWebpackChunks.set(name, storage.length);
  }

  return result;
}
