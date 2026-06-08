function promiseAll(iterable) {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return resolve([]);
    iterable.forEach((element, i) => {
      Promise.resolve(element)
        .then((val) => {
          result[i] = val;
          count++;
          if (count === iterable.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
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
