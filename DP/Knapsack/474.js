function fn(strs, m, n, zero, one, dp) {
    dp[0][0] = 0;

    for (let i = m; i >= zero; i--) {
        for (let j = n; j >= one; j--) {
            dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zero][j - one]);
        }
    }

   return dp[m][n];
}
var findMaxForm = function (strs, m, n) {

    let count = -1;
    let arr = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(0));
    for (let str of strs) {
        let zeros = str.split('').filter(c => c === '0').length;
        let ones = str.split('').filter(c => c === '1').length;
        count = fn(strs, m, n, zeros, ones, arr);
    }

    return count;
};
let strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3;
console.log(findMaxForm(strs, m, n))