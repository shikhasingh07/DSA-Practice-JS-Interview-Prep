var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0,
    windowSum = 0,
    result = 0;

  for (let right = 0; right < nums.length; right++) {
    // add to windowSum
    windowSum += nums[right];
    // shrink when cost > k
    while (nums[right] * (right - left + 1) - windowSum > k) {
      windowSum -= nums[left];
      left++;
    }
    result = Math.max(result, right - left + 1);
    // track result
  }
  return result;
};
let nums = [1, 2, 4],
  k = 5;
console.log(maxFrequency(nums, k));
