var findUnsortedSubarray = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  while (left < nums.length && nums[left] === sorted[left]) left++;
  while (right >= 0 && nums[right] === sorted[right]) right--;

  if (left >= right) return 0;
  return right - left + 1;
  console.log(left, right);
};
let nums = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(nums));
