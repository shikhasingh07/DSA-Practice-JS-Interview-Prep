var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length - 1;
  let count = 0;
  for (let k = nums.length - 1; k >= 2; k--) {
    let left = 0,
      right = k - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[k]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return count;
};
let nums = [2, 12, 3, 4];
console.log(triangleNumber(nums));
