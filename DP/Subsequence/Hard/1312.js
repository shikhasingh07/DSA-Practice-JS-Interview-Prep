/**
 * 1312. Minimum Insertion Steps to Make a String Palindrome
 *
 * Intuition:
 * Characters already in the LPS don't need to be touched.
 * For every character NOT in LPS, one insertion is needed.
 * Answer = s.length - LPS(s)
 *
 * Pattern: Subsequence DP (LCS variant)
 * LPS(s) = LCS(s, reverse(s))
 *
 * Time: O(n²)  |  Space: O(n²)
 */
function LPS(s) {
    let rev = s.split('').reverse().join('');
    let dp = new Array(s.length + 1).fill(0).map(() => new Array(rev.length + 1).fill(0));

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= rev.length; j++) {
            if (s[i - 1] === rev[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[s.length][rev.length];
}

var minInsertions = function (s) {
    return s.length - LPS(s);
};

let s = "mbadm";
console.log(minInsertions(s));