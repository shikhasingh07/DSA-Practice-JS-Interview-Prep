var maximumSubarraySum = function (nums, k) {
  let map = new Map();
  let count = 0;
  let maxCount = 0;

  for (let index = 0; index < nums.length; index++) {
    //window hit
    map.set(nums[index], (map.get(nums[index]) || 0) + 1);
    count += nums[index];

    if (index >= k) {
        let old = ..l.l.l.../nums[index - k];
        count -= old;
        map.set(old, map.get(old) - 1);
        if (map.get(old) === 0) map.delete(old);
    }

    //deleting window
    if (index >= k - 1) {
      if (map.size === k) {
        maxCount = Math.max(count, maxCount);
      }
    }
  }
  return maxCount;
};

let nums = [1, 5, 4, 2, 9, 9, 9],
  k = 3;
console.log(maximumSubarraySum(nums, k));
