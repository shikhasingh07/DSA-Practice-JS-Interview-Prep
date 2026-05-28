var mySqrt = function (x) {
  let low = 1,
    high = x;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let hmid = mid * mid;
    if (hmid === x) {
      return mid;
    } else if (hmid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
};
let x = 8;
console.log(mySqrt(x));
