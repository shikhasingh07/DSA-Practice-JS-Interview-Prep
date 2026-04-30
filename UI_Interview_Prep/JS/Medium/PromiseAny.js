function promiseAny(iterable) {
  let counter = 0;
  let error = [];
  return new Promise((res, rej) => {
    if (iterable.length === 0) rej(new AggregateError([]));

    iterable.forEach((element ,index) => {
      Promise.resolve(element)
        .then(res)
        .catch((err) => {
          counter++;
          error[index] = err;
          if (counter === iterable.length) {
            rej(new AggregateError(error));
          }
        });
    });
  });
}

const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

console.log(await promiseAny([p0, p1]));
