var findRight = (nums, n, target) => {
  let result = -1;
  let lo = 0,
    hi = n - 1;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      result = mid; // save kar lo
      lo = mid + 1; // aur left mein dhundo aur bhi
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return result;
};

var findLeft = (nums, n, target) => {
  let result = -1;
  let lo = 0,
    hi = n - 1;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      result = mid; // save kar lo
      hi = mid - 1; // aur left mein dhundo aur bhi
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return result;
};

var searchRange = function (nums, target) {
  let n = nums.length;
  let left = findLeft(nums, n, target);
  let right = findRight(nums, n, target);

  return [left, right];
};

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
