const debounce = (func, wait) => {
  let timer = null;
  let last = null;
  function debounc(...arg) {
    last = arg;
    clearTimeout(timer);
    let ctx = this;
    timer = setTimeout(() => func.apply(ctx, arg), wait);
  }

  debounc.cancel = () => {
    clearTimeout(timer);
  };

  debounc.flush = () => {
    clearTimeout(timer);
    if (last) func.apply(this, last);
  };

  return debounc;
};

function logger(msg) {
  console.log("called with:", msg);
}

const debouncedLogger = debounce(logger, 1000);

debouncedLogger("a");
debouncedLogger("b");
debouncedLogger("c");

debouncedLogger("hello");
debouncedLogger.cancel();

debouncedLogger("flush me");
debouncedLogger.flush();

function throttle(func, wait) {
  let timer = 0;
  return function (...args) {
    const now = Date.now();
    if (now - timer >= wait) {
      timer = now;
      func.apply(this, args);
    }
  };
}

function throttle(func, wait) {
  let isThrottled = false;
  return function (...args) {
    if (isThrottled) return;
    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
}

let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);
console.log(throttledIncrement());
