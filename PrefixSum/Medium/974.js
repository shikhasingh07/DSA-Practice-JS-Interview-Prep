var subarraysDivByK = function (nums, k) {
  let map = { 0: 1 };
  let prefixSum = 0,
    ans = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let rem = ((prefixSum % k) + k) % k;
    ans += map[rem] || 0 
    map[rem] = (map[rem] || 0) + 1;
  }

  return ans;
};
let nums = [4, 5, 0, -2, -3, 1],
  k = 5;
console.log(subarraysDivByK(nums, k));
