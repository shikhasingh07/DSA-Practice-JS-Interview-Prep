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

function maxBy(array, iteratee) {
  let maxVal, maxEl;

  for (let val of array) {
    const cur = iteratee(val);
    if (cur !== undefined && (cur > maxEl || maxEl === undefined)) {
      maxEl = cur;
      maxVal = val;
    }
  }

  return maxVal;
}

function minBy(array, iteratee) {
  let maxVal, maxEl;

  for (let val of array) {
    const cur = iteratee(val);
    if (cur !== undefined && (cur < maxEl || maxEl === undefined)) {
      maxEl = cur;
      maxVal = val;
    }
  }

  return maxVal;
}

function objectMap(obj, fn) {
  let newObj = {};

  for (let key in obj) {
    newObj[key] = fn.call(obj, obj[key]);
  }

  return newObj;
}

function once(func) {
  let once = false;
  let val;

  return function (...args) {
    if (!once) {
      val = func.apply(this, args);
      once = true;
    }
    return val;
  };
}

function promiseReject(reason) {
  return new Promise((resolve, reject) => reject(reason));
}

function range(start = 0, end, step = 1) {
  let ans = [];
  if (end === undefined) {
    end = start;
    start = 0;
    if (end < 0) step = -1;
  }

  if (step === 0) {
    for (let i = 0; i < end - start; i++) ans.push(start);
    return ans;
  }
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    ans.push(i);
  }
  return ans;
}

function rangeRight(start = 0, end, step = 1) {
  let ans = range(start, end, step).reverse();
  return ans;
}

let instance = null;

const GlobalMap = {
  getInstance() {
    if (!instance) {
      instance = new Map();
    }
    return instance;
  },
};

export default GlobalMap;

function uniqueArray(array) {
  return new Set(...Array);
}

Array.prototype.myAt = function (index) {
  if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
};

function cycle(...values) {
  let index = 0;

  return () => {
    // Read the current entry before advancing so the first call returns `values[0]`.
    const currentValue = values[index];
    // Wrap back to the start after the last item.
    index = (index + 1) % values.length;
    return currentValue;
  };
}

Function.prototype.myBind = function (thisArg, ...argArray) {
  let fn = this; 
  return (...args) => {
    return fn.apply(thisArg,[...argArray, ...args]);
  }
};

function size(collection) {
 if (collection == null) {
    return 0;
  }

  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  if (typeof collection === 'object') {
    return Object.keys(collection).length;
  }

  return 0;
}