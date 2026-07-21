var longestPalindromeSubseq = function (s) {
    let text2 = s.split('').reverse().join('');
    const dp = new Array(s.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (s[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[s.length][text2.length]
};

let text1 = "bbbab";
console.log(longestPalindromeSubseq(text1))