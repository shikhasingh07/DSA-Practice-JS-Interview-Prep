var getSubarrayBeauty = function (nums, k, x) {
  const freq = new Array(101).fill(0);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    freq[nums[i] + 50]++;

    if (i >= k) {
      freq[nums[i - k] + 50]--;
    }

    if (i >= k - 1) {
      let count = 0;
      for (let j = 0; j < 50; j++) {
        // j=0 means value -50, j=49 means value -1
        count += freq[j];
        if (count >= x) {
          result.push(j - 50); // convert back to actual value
          break;
        }
      }
      // agar x-th smallest nahi mila (not enough negatives)
      if (count < x) result.push(0);
    }
  }
  return result;
};
let nums = [1, -1, -3, -2, 3],
  k = 3,
  x = 2;
console.log(getSubarrayBeauty(nums, k, x));
