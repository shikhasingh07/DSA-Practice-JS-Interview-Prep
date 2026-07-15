/**
 * 🗺️ One Path to Rule Them All — Minimum Path Sum
 *
 * # Intuition
 * At each cell, you can only arrive from above or from the left.
 * So the minimum cost to reach (i,j) is: grid[i][j] + min(cost from top, cost from left).
 * Classic top-down DP — start from bottom-right, recurse back to (0,0).
 *
 * # Approach
 * 1. dp(i, j) = min cost to reach cell (i, j)
 * 2. Out of bounds → Infinity (invalid path, never chosen by min)
 * 3. Base case: (0,0) → grid[0][0]
 * 4. Recurrence: grid[i][j] + min(dp(i-1, j), dp(i, j-1))
 * 5. Memoize in 2D array filled with -1
 *
 * # Complexity
 * - Time: O(m × n) — each cell computed once
 * - Space: O(m × n) — memo array + recursion stack
 */
function dp(grid, i, j, arr) {
    if (i < 0 || j < 0) return Infinity;
    if (i === 0 && j === 0) return grid[0][0];
    if (arr[i][j] !== -1) return arr[i][j];

    arr[i][j] = grid[i][j] + Math.min(dp(grid, i - 1, j, arr), dp(grid, i, j - 1, arr));
    return arr[i][j];
}

var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));

    return dp(grid, m - 1, n - 1, memo);
};

let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
];
console.log(minPathSum(grid));
