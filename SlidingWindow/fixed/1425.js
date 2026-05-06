var constrainedSubsetSum = function (nums, k) {
  let dp = [],
    max = 0,
    ans = -Infinity,
    deque = [];

  for (let right = 0; right < nums.length; right++) {
    if (deque[0] < right - k) deque.shift();

    dp[right] = nums[right] + Math.max(0, deque.length > 0 ? dp[deque[0]] : 0);

    while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[right]) {
      deque.pop();
    }

    deque.push(right);

    ans = Math.max(ans, dp[right]);
  }
  return ans;
};
let nums = [-1,-2,-3],
  k = 1;
console.log(constrainedSubsetSum(nums,k));
