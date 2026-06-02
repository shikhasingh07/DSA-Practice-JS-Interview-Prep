function canDo(nums, cap, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= cap) {
      result++;
      i++;
    }
  }
  return result >= k;
}
var minCapability = function (nums, k) {
  let lo = 1,
    hi = Math.max(...nums);
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canDo(nums, mid, k)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};
let nums = [2, 3, 5, 9],
  k = 2;
console.log(minCapability(nums, k));
