const promisifyCustomSymbol = Symbol.for('util.promisify.custom');

export default function promisify(func) {
  if (func[promisifyCustomSymbol]) {
    return func[promisifyCustomSymbol];
  }
  return function (...arg) {
    return new Promise((res, rej) => {
      func.call(this, ...arg, (err, value) => {
        if (err) rej(err);
        else res(value);
      });
    });
  };
}

