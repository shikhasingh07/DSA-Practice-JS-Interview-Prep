var removeDuplicates = function (nums) {
  let s = 1,
    f = 1;

  while (f <= nums.length - 1) {
    if (nums[f] !== nums[s - 1]) {
      s++;
      nums[s] = nums[f];
    }
    f++;
  }
  return s+1;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
