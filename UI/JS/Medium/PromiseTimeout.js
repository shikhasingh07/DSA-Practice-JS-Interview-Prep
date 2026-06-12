export default function promiseTimeout(promise, duration) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject("Promise timeout"), duration);
  });
  return Promise.race([promise, timeoutPromise]);
}

function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
