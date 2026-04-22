var SumSmaller = (nums, target) => {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] && nums[index] === nums[index - 1]) continue;

    let left = index + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = nums[index] + nums[left] + nums[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};
let nums = [-2, 0, 1, 3];
console.log(SumSmaller(nums, 2));
