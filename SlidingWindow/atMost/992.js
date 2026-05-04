function atMost(nums, k) {
  let left = 0,
    map = new Map(),
    result = 0;

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    while (map.size > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) map.delete(nums[left]); // ← this shrinks map.size!
      left++;
    }

    result += right - left + 1;
  }
  return result;
}
var subarraysWithKDistinct = function (nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
};
let nums = [1, 2, 1, 2, 3],
  k = 2;
