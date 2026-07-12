/**
 * 🎒 Split the Bag — Partition Equal Subset Sum
 *
 * # Intuition
 * Can we split array into two groups with equal sum?
 * Equal sum means each group = total/2. If total is odd → impossible.
 * Reduce to: "Can we find a subset with sum = target?" → 0/1 Knapsack!
 *
 * # Approach
 * 1. If total is odd → false
 * 2. target = total / 2
 * 3. dp[j] = can we make sum j?
 * 4. For each num, go backwards j = target → num:
 *    dp[j] = dp[j] || dp[j - num]
 * 5. Return dp[target]
 *
 * # Complexity
 * - Time: O(n × target)
 * - Space: O(target)
 */
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
    return dp(nums, target, new Array(target + 1).fill(false));
};

let nums = [1, 5, 11, 5];
console.log(canPartition(nums));
