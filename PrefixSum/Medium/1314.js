var matrixBlockSum = function (mat, k) {
  const m = mat.length,
    n = mat[0].length;
  const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let sum = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] =
        mat[i - 1][j - 1] +
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1];
    }
  }

  const ans = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let r1 = Math.max(0, i - 1 - k);
      let r2 = Math.min(m - 1, i - 1 + k);
      let c1 = Math.max(0, j - 1 - k);
      let c2 = Math.min(n - 1, j - 1 + k);
      sum =
        prefix[r2 + 1][c2 + 1] -
        prefix[r1][c2 + 1] -
        prefix[r2 + 1][c1] +
        prefix[r1][c1];
      ans[i - 1][j - 1] = sum;
    }
  }

 return ans;
};

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
console.log(matrixBlockSum(mat, k));
