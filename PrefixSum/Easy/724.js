var pivotIndex = function (nums) {
  let sum = nums.reduce((prev, item) => prev + item, 0);
  let left = 0,
    rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum = sum - left - nums[i];
    if (rightSum === left) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
