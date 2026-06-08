function memoize(func) {
  const cache = {};

  return function (arg) {
    const key = `${typeof arg}_${arg}`;
    if (cache[key]) return cache[key];
    const result = func.call(this, arg);
    cache[key] = result;
    return result;
  };
}

function expensiveFunction(n) {
  console.log("Computing...");
  return n * 2;
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5));
