var findPeakElement = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

let nums = [1, 2, 3, 1];
console.log(findPeakElement(nums));
