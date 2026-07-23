/**
 * 97. Interleaving String
 *
 * Intuition:
 * dp[i][j] = can s1[0..i-1] and s2[0..j-1] form s3[0..i+j-1]?
 * k = i + j is always the current s3 index — no third dimension needed.
 *
 * Two approaches shown: bottom-up DP and top-down memoization.
 *
 * Time: O(m * n)  |  Space: O(m * n)
 */

// Bottom-up DP
function fn(s1, s2, s3, dp) {
    dp[0][0] = true;
    for (let i = 1; i <= s1.length; i++)
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    for (let j = 1; j <= s2.length; j++)
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s3[i + j - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
            if (s2[j - 1] === s3[i + j - 1]) {
                dp[i][j] = dp[i][j] || dp[i][j - 1];
            }
        }
    }
    return dp[s1.length][s2.length];
}

// Top-down memoization
function fnMemo(i, j, s1, s2, s3, memo) {
    if (i === s1.length && j === s2.length) return true;

    let k = i + j;
    if (k >= s3.length) return false;
    if (memo[i][j] !== -1) return memo[i][j];

    let item = false;
    if (s1[i] === s3[k]) {
        item = fnMemo(i + 1, j, s1, s2, s3, memo);
    }
    if (s2[j] === s3[k]) {
        item = item || fnMemo(i, j + 1, s1, s2, s3, memo);
    }

    memo[i][j] = item;
    return memo[i][j];
}

var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    let memo = new Array(s1.length + 1).fill(-1).map(() => new Array(s2.length + 1).fill(-1));
    return fnMemo(0, 0, s1, s2, s3, memo);
};

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
console.log(isInterleave(s1, s2, s3)); // true
