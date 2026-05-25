var findMaxLength = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      ans.push(-1);
    } else {
      ans.push(1);
    }
  }

  let sum = 0,
    map = { 0: -1 },
    maxLen = 0;
  for (let i = 0; i < ans.length; i++) {
    sum += ans[i];
    if (map[sum] !== undefined) {
      maxLen = Math.max(maxLen, i - map[sum]);
    } else {
      map[sum] = i;
    }
  }
  return maxLen
};

let nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];
console.log(findMaxLength(nums));
