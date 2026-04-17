var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1;

  let ans = [];
  let idx = nums.length - 1;
  while (left <= right) {
    let leftsqur = nums[left] * nums[left];
    let rightsqur = nums[right] * nums[right];

    if (leftsqur > rightsqur) {
      ans[idx] = leftsqur;
      left++;
    } else {
      ans[idx] = rightsqur;
      right--;
    }
    idx--;
  }

  return ans;
};
let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
