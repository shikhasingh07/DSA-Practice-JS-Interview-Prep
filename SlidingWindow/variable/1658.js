var minOperations = function (nums, x) {
  let left = 0,
    sum = 0,
    maxLen = -1;

  const total = nums.reduce((a, b) => a + b, 0);
  const target = total - x;
  if (target < 0) return -1;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > target) {
      sum -= nums[left];
      left++;
    }

    if (sum === target) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen === -1 ? -1 : nums.length - maxLen;
};
let nums = [1, 1, 4, 2, 3],
  x = 5;
console.log(minOperations(nums, x));
