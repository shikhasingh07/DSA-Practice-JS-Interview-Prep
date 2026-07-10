
function dp(nums, total, dp) {
    dp[0] = true;

    for (let num of nums) {
        for (let i = total; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[total];
}
var canPartition = function (nums) {
    const total = nums.reduce((arr, item) => arr + item);
    if (total % 2 !== 0) return false;

    const target = total / 2;

    return dp(nums, target, new Array(target + 1).fill(false))
};
let nums = [1, 5, 11, 5];
console.log(canPartition(nums))