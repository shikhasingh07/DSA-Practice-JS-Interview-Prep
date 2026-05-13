var canJump = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > count) {
      return false;
    }
    count = Math.max(count , i + nums[i]);
  }

  return true;
};

let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));
