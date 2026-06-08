function promisify(func) {
  return function(...args){
    return new Promise((res, rej) => {
      func.call(this, ...args, (err, value) => {
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
