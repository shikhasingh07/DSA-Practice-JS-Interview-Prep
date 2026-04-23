var removeElement = function (nums, val) {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
