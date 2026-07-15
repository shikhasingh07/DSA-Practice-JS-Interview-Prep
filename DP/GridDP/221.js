var maximalSquare = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let dp = new Array(m).fill(null).map(item => new Array(n));

    let area = -1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === "0") {
                dp[i][j] = 0;
            } else if (i === 0 || j === 0) {
                dp[i][j] = parseInt(matrix[i][j])
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }

            area = Math.max(area, dp[i][j]);
        }
    }

    return area * area;
};
let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];
console.log(maximalSquare(matrix))