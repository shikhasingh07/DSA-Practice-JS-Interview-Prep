function promiseResolve(value) {
  if (value instanceof Promise) return value;
  if (typeof value?.then === 'function') {
    return new Promise((resolve, reject) => {
      value.then(resolve,reject);
    });
  }
  return new Promise(resolve => resolve(value));
}