/**
 * 🔤 Can Words Build It? — Word Break
 *
 * # Intuition
 * Check if string can be segmented into dictionary words.
 * dp[i] = true means s[0..i-1] can be built from wordDict.
 *
 * # Approach
 * 1. dp[0] = true (empty string always valid)
 * 2. For each position i (1 to n):
 *    - Try every split point j (0 to i)
 *    - If dp[j] is true AND s[j..i] is in dict → dp[i] = true
 * 3. Return dp[n]
 *
 * # Complexity
 * - Time: O(n² × m) — n² substrings, m = avg word length for slice
 * - Space: O(n) — dp array
 */
function dp(s, dict, idx, arr) {
  arr[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] === true && dict.has(s.slice(j, i))) {
        arr[i] = true;
      }
    }
  }
  return arr[s.length];
}

var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  return dp(s, wordSet, 0, new Array(s.length + 1).fill(false));
};

let s = "leetcode",
  wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));
