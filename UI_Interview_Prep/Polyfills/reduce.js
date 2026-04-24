Array.prototype.myReduce = function (callbackFn, initialValue) {
  // how i will get this value
  let arr = this;
  let acc = initialValue;
  let start = 0;

  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  if (acc === undefined) {
    while (start < arr.length && !(start in arr)) {
      start++;
    }
    if (start >= arr.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = arr[start];
    start++;
  }

  for (let i = start; i < arr.length; i++) {
    if (i in arr) {
      acc = callbackFn(acc, arr[i], i, arr);
    }
  }

  return acc;
};

const ans = [1, 2, 4].myReduce((pre, curr) => pre + curr);
console.log(ans);
