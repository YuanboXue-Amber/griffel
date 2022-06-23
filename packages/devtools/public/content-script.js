const getWebpackChunkObjects = () => {
  const webpackChunkObjects = {};
  Object.keys(window)
    .filter(key => key.startsWith('webpackChunk'))
    .forEach(name => {
      const storage = window[name];
      if (!Array.isArray(storage)) {
        return;
      }

      webpackChunkObjects[name] = storage.map(storageEntry => {
        if (Array.isArray(storageEntry) && storageEntry[1] && typeof storageEntry[1] === 'object') {
          const duplicate = [...storageEntry];
          Object.entries(duplicate[1]).forEach(([filepath, fn]) => {
            duplicate[1][filepath] = String(fn);
          });
          return duplicate;
        }
        return storageEntry;
      });
    });
  return webpackChunkObjects;
};

let webpackChunkObjects = undefined;
const handleFromWeb = async event => {
  if (event.data.from === 'startGetWebpackChunkObjects') {
    if (webpackChunkObjects === undefined) {
      // TODO maybe stringify is not needed?
      webpackChunkObjects = JSON.stringify(getWebpackChunkObjects());
    }
    window.postMessage({
      from: 'endGetWebpackChunkObjects',
      data: webpackChunkObjects,
    });
  }
};
window.addEventListener('message', handleFromWeb);

// const port = chrome.runtime.connect({ name: 'content-script' });

// chrome.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name === 'extension');
//   port.onMessage.addListener(function (msg) {
//     if (msg.id === 'syncWebpackSourceMapsIfNeeded') {
//       syncWebpackSourceMapsIfNeeded();
//       console.log('amber syncWebpackSourceMapsIfNeeded');
//     }
//   });
// });

// let needWebpackSync = true;
// const callAsap = typeof requestIdleCallback === 'function' ? requestIdleCallback : fn => Promise.resolve().then(fn);
// const knownWebpackChunks = new Map();

// function syncWebpackSourceMapsIfNeeded() {
//   if (!needWebpackSync) {
//     return;
//   }

//   needWebpackSync = false;
//   callAsap(() => (needWebpackSync = true));

//   const result = [];
//   for (const name of Object.keys(window)) {
//     if (!name.startsWith('webpackChunk_')) {
//       continue;
//     }

//     const knownSize = knownWebpackChunks.get(name) || 0;
//     const storage = window[name];

//     if (!Array.isArray(storage)) {
//       continue;
//     }

//     for (let i = knownSize; i < storage.length; i++) {
//       const storageEntry = storage[i];

//       if (Array.isArray(storageEntry) && storageEntry[1] && typeof storageEntry[1] === 'object') {
//         for (const [filepath, fn] of Object.entries(storageEntry[1])) {
//           // sourceToResolve(filepath, fn);
//           result.push({ filepath, fn });
//         }
//       }
//     }

//     knownWebpackChunks.set(name, storage.length);
//   }

//   return result;
// }
