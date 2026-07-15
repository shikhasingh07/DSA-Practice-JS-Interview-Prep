function dfs(matrix, i, j, dp) {
    if (dp[i][j] !== -1) return dp[i][j];

    let max = 1;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let [dr, dc] of dirs) {
        let ni = i + dr;
        let nj = j + dc;

        if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[0].length && matrix[ni][nj] > matrix[i][j]) {
            max = Math.max(max, 1 + dfs(matrix, ni, nj, dp));
        }
    }
    dp[i][j] = max;
    return dp[i][j];

}
var longestIncreasingPath = function (matrix) {

    let m = matrix.length;
    let n = matrix[0].length;

    let dp = new Array(m).fill(null).map((item) => new Array(n).fill(-1));

    let max = -1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, dfs(matrix, i, j, dp));    
        }
    }

    return max;
};
let matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]];
console.log(longestIncreasingPath(matrix))