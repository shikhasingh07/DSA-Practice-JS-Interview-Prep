function result(nums, n, idx, current, ans, used) {
  if (current.length === n) {
    ans.push([...current]);
    return ans;
  }

  for (let i = 0; i < n; i++) {
    if (used[i]) continue;

    used[i] = true;
    current.push(nums[i]);
    result(nums, n, i + 1, current, ans, used);
    current.pop();
    used[i] = false;
  }
}
var permute = function (nums) {
  let ans = [];
  let used = new Array(nums.length).fill(false);
  result(nums, nums.length, 0, [], ans, used);
  return ans;
};
let nums = [1, 2, 3];
console.log(permute(nums));
