function result(nums, idx, ans) {
  if (nums.length === idx) {
    return ans;
  }

  return result(nums, idx + 1, ans) + result(nums, idx + 1, ans ^ nums[idx]);
}
var subsetXORSum = function (nums) {
  let idx = 0;
  let ans = 0;
  return result(nums, idx, ans);
};
let nums = [5, 1, 6];
console.log(subsetXORSum(nums));
