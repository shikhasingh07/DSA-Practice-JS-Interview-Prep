var applyOperations = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[index + 1]) {
      nums[index] *= 2;
      nums[index + 1] = 0;
    }
  }

  let s = 0,
    f = 0;
  while (f < nums.length) {
    if (nums[f] !== 0) {
      nums[s] = nums[f];
      s++;
    }
    f++;
  }

  while (s < nums.length) {
    nums[s] = 0;
    s++;
  }
  return nums;
};
let nums = [1, 2, 2, 1, 1, 0];
console.log(applyOperations(nums));
