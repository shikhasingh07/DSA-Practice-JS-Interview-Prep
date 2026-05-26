var NumMatrix = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  this.prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      this.prefix[i][j] =
        matrix[i - 1][j - 1] +
        this.prefix[i - 1][j] +
        this.prefix[i][j - 1] -
        this.prefix[i - 1][j - 1];
    }
  }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.prefix[row2+1][col2+1] - this.prefix[row1][col2+1] - this.prefix[row2+1][col1] + this.prefix[row1][col1]
};

const numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); 
console.log(numMatrix.sumRegion(1,1,2,2));