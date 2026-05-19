function functionLength(fn) {
  return fn.length;
}

function makeCounter(initialValue = 0) {
  let count = initialValue;
  return () => count++;
}

function mean(array) {
  let avg = array.reduce((prev, item) => prev + item, 0) / array.length;
  return avg;
}

function numberOfArguments(...arg) {
  return arg.length;
}

function sleep(duration) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), duration);
  });
}

Array.prototype.square = function () {
  let ans = this;
  return ans.map((item) => item * item);
};

function setCancellableTimeout(callback, delay, ...args) {
  let timer = null;
  timer = setTimeout(() => callback(...args), delay);
  return () => clearTimeout(timer);
}

function chunk(array, size = 1) {
  let ans  = []; 
  for (let i = 0; i < array.length; i+=size) {
    ans.push(array.slice(i, i + size));
  }
  return ans;
}

function dropRightWhile(array, predicate) {
 let index = array.length - 1;

  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(0, index + 1);
}

const dropWhile = (array, prec) => {
  let len = 0;

  while (len < array.length && prec(array[len], len, array)) {
    len++;
  }

  return array.slice(len);
};
