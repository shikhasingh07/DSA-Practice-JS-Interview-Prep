function fn(s1, s2, s3, dp) {
    dp[0][0] = true;
    for (let i = 1; i <= s1.length; i++)
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    for (let j = 1; j <= s2.length; j++)
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];

    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (s1[i - 1] === s3[i + j - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
            if (s2[j - 1] === s3[i + j - 1]) {
                dp[i][j] = dp[i][j] || dp[i][j - 1];
            }
        }
    }
    return dp[s1.length][s2.length]
}
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    let dp = new Array(s1.length + 1)
        .fill(false)
        .map(() => new Array(s2.length + 1).fill(false));
    return fn(s1, s2, s3, dp);
};
let s1 = "aabcc",
    s2 = "dbbca",
    s3 = "aadbbcbcac";
console.log(isInterleave(s1, s2, s3));
