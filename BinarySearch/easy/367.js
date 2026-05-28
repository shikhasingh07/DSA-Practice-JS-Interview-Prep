var isPerfectSquare = function(num) {
    let low = 1,
    high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let hmid = mid * mid;
    if (hmid === num) {
      return true;
    } else if (hmid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};
let num = 16;
console.log(isPerfectSquare(num))