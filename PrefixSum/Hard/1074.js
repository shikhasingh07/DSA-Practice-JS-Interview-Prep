var numSubmatrixSumTarget = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] =
        matrix[i - 1][j - 1] +
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1];
    }
  }

  let sum = 0, ans = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = i; j <= m; j++) {
      let map = {0: 1};
      for(let c = 1 ; c <= n ; c++){
        sum = prefix[j][c] - prefix[i-1][c] ;
        ans += map[sum - target] || 0
        map[sum] = (map[sum] || 0) + 1
      }
    }
  }

  return ans;
};
let matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  target = 0;
console.log(numSubmatrixSumTarget(matrix, target));
