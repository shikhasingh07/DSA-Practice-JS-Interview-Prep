var minSwaps = function (nums) {
  const n = nums.length;
  const k = nums.filter((x) => x === 1).length;

  let swaps = 0,
    count = 0;

  for (let i = 0; i < 2 * n; i++) {
    count += nums[i % n];

    if (i >= k) {
      count -= nums[(i - k) % n];
    }

    swaps = Math.max(swaps, count);
  }
  console.log(k, swaps);
  return k - swaps;
};
let nums = [0,1,0,1,0,1,0,1];
console.log(minSwaps(nums));
