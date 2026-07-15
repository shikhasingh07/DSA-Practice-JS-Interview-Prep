var uniquePathsWithObstacles = function (obstacleGrid) {
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1) return 0;

    const dp = new Array(n).fill(null).map((item) => new Array(m).fill(-1));
    dp[0][0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
            else if (i === 0 && j > 0) {
                dp[i][j] = dp[i][j - 1]
            } else if (j === 0 && i > 0) {
                dp[i][j] = dp[i - 1][j]
            }
            else if (i > 0 && j > 0) {
                let up = i > 0 ? dp[i - 1][j] : 0;
                let left = j > 0 ? dp[i][j - 1] : 0;

                dp[i][j] = up + left;
            }
        }
    };

    return dp[n - 1][m - 1];
};
let obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(uniquePathsWithObstacles(obstacleGrid))