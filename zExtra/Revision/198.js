function dfs(nums, n, dp) {
    if (n < 0) return 0;
    if (n === 0) return nums[0];

    if (dp[n] !== -1) return dp[n];

    let take = dfs(nums, n - 2, dp) + nums[n];
    let skip = dfs(nums, n - 1, dp);

    dp[n] = Math.max(take , skip); 
    return dp[n];
}
function rob(nums) {

    let dp = new Array(nums.length).fill(-1);
    let n = nums.length;
    return dfs(nums, n - 1, dp);
}
let nums = [1, 1, 3, 3];
console.log(rob(nums))