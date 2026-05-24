var checkSubarraySum = function (nums, k) {
  let map = { 0: -1 };
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let rem = prefixSum % k;

    if (map[rem] !== undefined) {
      if (i - map[rem] >= 2) {
        return true;
      }
    } else {
      map[rem] = i;
    }
  }

  return false;
  // loop till nums.length
  // ans = [] to find prefix sum and  store multiple in map like 6 : [2,4]
  // loop again till 2 and check stored multiple
  // return that mapped value
};
let nums = [23, 2, 4, 6, 7],
  k = 6;
console.log(checkSubarraySum(nums, k));
