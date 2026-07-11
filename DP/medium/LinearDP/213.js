/**
 * 🔄 The Circular Trap — House Robber II
 *
 * # Intuition
 * First and last house are adjacent in a circle — you can't rob both.
 * Break the circle into two linear subproblems:
 *   - [0..n-2]: include first, exclude last
 *   - [1..n-1]: exclude first, include last
 * Answer is the max of both.
 *
 * # Approach
 * 1. Edge cases: length 0 → 0, length 1 → nums[0]
 * 2. Same dp function with idx controlling the start boundary
 * 3. Base cases:
 *    - n < 0 → 0 (out of range)
 *    - n < idx → 0 (before start boundary)
 *    - n === idx → nums[idx] (only one house)
 * 4. Recurrence: max(rob current + dp(n-2), skip + dp(n-1))
 * 5. Top-down memoization via arr[]
 *
 * # Complexity
 * - Time: O(n) — each index computed once per subproblem, 2 * O(n) = O(n)
 * - Space: O(n) — memo array + recursion stack
 */

function dp(nums, idx, n, arr) {

    if (n < 0) return 0;
    if (n < idx) return 0;
    if (n === idx) return nums[idx];

    if (arr[n] !== -1) return arr[n];

    let take = dp(nums, idx, n - 2, arr) + nums[n];
    let skip = dp(nums, idx, n - 1, arr);

    arr[n] = Math.max(take, skip);
    return arr[n];
}
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    return Math.max(
        dp(nums, 1, nums.length - 1, new Array(nums.length).fill(-1)),
        dp(nums, 0, nums.length - 2, new Array(nums.length).fill(-1))
    );
};
let nums = [1, 2, 3, 1];
console.log(rob(nums))
