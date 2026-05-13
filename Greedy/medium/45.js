var jump = function (nums) {
  let count = 0;
  let currentEnd = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      count++;
      currentEnd = farthest;
    }
  }
  return count;
};
let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
