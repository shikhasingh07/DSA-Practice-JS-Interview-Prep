function promisify(func) {
  return (...args) => {
    return new Promise((res, rej) => {
      func(...args, (err, value) => {
        if (err) rej(err);
        else res(value);
      });
    });
  };
}

function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo("example.com", { foo: 1 });
console.log(data);
