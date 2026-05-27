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
  let ans = [];
  for (let i = 0; i < array.length; i += size) {
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

function compact(array) {
  let map = array.filter(Boolean);
  return map;
}

function difference(array, values) {
  return array.filter((item) => !values.includes(item));
}

function fill(array, value, start = 0, end = array.length) {
  if (start < 0) start = Math.max(0, array.length + start);
  if (end < 0) end = Math.max(0, array.length + end);
  start = Math.min(start, array.length);
  end = Math.min(end, array.length);

  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}

function get(objectParam, pathParam, defaultValue) {
  if (objectParam === null) return defaultValue;

  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  const result = path.reduce(
    (obj, key) => (obj == null ? undefined : obj[key]),
    objectParam,
  );

  return result !== undefined ? result : defaultValue;
}

function intersection(...arrays) {
 if (arrays.length === 0) return [];

  return [...new Set(arrays[0])].filter((value) =>
    arrays.every((arr) => arr.includes(value)),
  );
}