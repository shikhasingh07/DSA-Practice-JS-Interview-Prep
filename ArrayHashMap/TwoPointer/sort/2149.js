var rearrangeArray = function (nums) {
  let pos = 0,
    neg = 1;
  let result = [];
  for (let num of nums) {
    if (num > 0) {
      result[pos] = num;
      pos += 2;
    } else {
      result[neg] = num;
      neg += 2;
    }
  }
  return result;
};
let nums = [3, 1, -2, -5, 2, -4];
console.log(rearrangeArray(nums));
