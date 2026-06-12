function limit(n, fn) {
  let count = 0;
  let result;

  return function(...args) {
    if (count < n) {
      result = fn.apply( this, args); // this binding
      count++;
    }
    return result;
  };
}