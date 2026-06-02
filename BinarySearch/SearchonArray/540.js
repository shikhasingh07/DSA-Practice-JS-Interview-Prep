var singleNonDuplicate = function (nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    let isMid = mid % 2 === 0;

    if (isMid && nums[mid] === nums[mid + 1]) {
      low = mid + 2;
    } else if (isMid && nums[mid] !== nums[mid + 1]) {
      high = mid;
    } else if (!isMid && nums[mid] === nums[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[low];
};
let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(nums));
