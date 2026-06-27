function subset(nums, idx, n, ans, result) {
  if (idx === n) {
    result.push([...ans]);
    return ans;
  }

  subset(nums, idx + 1, n, ans, result);
  ans.push(nums[idx]);
  subset(nums, idx + 1, n, ans, result);
  ans.pop();
}
var subsets = function (nums) {
  let result = [];
  subset(nums, 0, nums.length, [], result);
  return result;
};
let nums = [1, 2, 3];
console.log(subsets(nums));
