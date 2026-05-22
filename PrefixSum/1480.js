var runningSum = function (nums) {
  let sum = [];

  sum[0] = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      sum[i] = sum[i - 1] + nums[i];
    }
  }

  return sum;
};

let nums = [1, 2, 3, 4];
console.log(runningSum(nums));
