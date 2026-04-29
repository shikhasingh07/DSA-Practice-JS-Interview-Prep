var minSubArrayLen = function (target, nums) {
  // sum , result , left
  let sum = 0,
    result = Infinity,
    left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      result =
        result === 0 ? right - left + 1 : Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return result;
};
let target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
