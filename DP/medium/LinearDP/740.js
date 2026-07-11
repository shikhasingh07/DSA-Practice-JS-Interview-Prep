/**
 * 🏠 Rob the Number Line — Delete and Earn
 *
 * # Intuition
 * If you pick number x, you earn x points but must delete all x-1 and x+1.
 * This is exactly House Robber — adjacent numbers can't both be picked!
 * Transform: points[x] = x * count(x), then apply House Robber on values 0..max.
 *
 * # Approach
 * 1. Build map: map[x] = total points earned by taking all x's
 * 2. max = max value in nums
 * 3. Top-down DP from max → 0:
 *    - take = dp(max-2) + map[max]
 *    - skip = dp(max-1)
 *    - dp[max] = max(take, skip)
 *
 * # Complexity
 * - Time: O(n + max)
 * - Space: O(max)
 */
function dp(nums, max, map, arr) {

    if (max < 0) return 0;
    if (max === 0) return map[max] || 0;

    if (arr[max] !== -1) return arr[max]
    let take = dp(nums, max - 2, map, arr) + (map[max] || 0);
    let skip = dp(nums, max - 1, map, arr)

    arr[max] = Math.max(take, skip);
    return arr[max];
}
var deleteAndEarn = function (nums) {
    let map = {};

    for (let num of nums) {
        map[num] = (map[num] || 0) + num;
    }
    const max = Math.max(...nums);

    return dp(nums, max, map, new Array(max + 1).fill(-1));
};
let nums = [3, 4, 2];
console.log(deleteAndEarn(nums))