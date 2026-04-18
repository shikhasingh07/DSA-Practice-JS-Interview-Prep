function swap(nums, low, right) {
  let num = nums[low];
  nums[low] = nums[right];
  nums[right] = num;
}
var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(nums, mid, high);
      high--;
    }
  }
  return nums;
};
let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
