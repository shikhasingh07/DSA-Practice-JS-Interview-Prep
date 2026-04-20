// function promiseAll(iterable) {
//   let result = [];
//   let count = 0;
//   return new Promise((resolve, reject) => {
//     if (iterable.length === 0) return resolve([]);
//     iterable.forEach((element, i) => {
//       Promise.resolve(element)
//         .then((val) => {
//           result[i] = val;
//           count++;
//           if (count === iterable.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// }

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(listener);
  }

  off(event, listener) {
    this.events.set(
      event,
      this.events.get(event).filter((l) => l !== listener),
    );
  }

  emit(event, ...args) {
   this.events.get(event)?.forEach(l => l(...args))
  }
}

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
