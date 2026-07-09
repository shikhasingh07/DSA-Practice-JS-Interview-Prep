/**
 * 📈 Growing Sequence — Longest Increasing Subsequence
 *
 * # Intuition
 * dp[i] = length of LIS ending at index i.
 * For each i, check all j < i — if nums[j] < nums[i], LIS can be extended.
 *
 * # Approach
 * 1. dp[i] = 1 (every element is LIS of length 1 by itself)
 * 2. For each i, try all j < i:
 *    - If nums[j] < nums[i] → dp[i] = max(dp[i], dp[j] + 1)
 * 3. Return max of entire dp array
 *
 * # Complexity
 * - Time: O(n²)
 * - Space: O(n)
 */
var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
