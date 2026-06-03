function canDo(nums, cap, k) {
  let left = 0, pair = 0;
  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > cap) left++;
    pair += right - left;
  }
  return pair >= k;
}
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  let lo = 0,
    hi = nums[nums.length - 1] - nums[0];
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
let nums = [1, 3, 1],
  k = 1;
console.log(smallestDistancePair(nums, k));
