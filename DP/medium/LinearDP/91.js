/**
 * 🔢 Numbers or Letters? — Decode Ways
 *
 * # Intuition
 * Each digit can be decoded alone (1-9) or paired with the next (10-26).
 * Count all valid decodings using top-down DP from left to right.
 *
 * # Approach
 * 1. dp(idx) = number of ways to decode s[idx..n-1]
 * 2. Base: idx === n → 1 (full string decoded)
 * 3. If s[idx] === '0' → 0 (invalid, can't decode alone)
 * 4. Single digit: always add dp(idx+1)
 * 5. Two digit: if s[idx..idx+1] in 10-26 → add dp(idx+2)
 * 6. Memoize by idx
 *
 * # Complexity
 * - Time: O(n) — each index computed once
 * - Space: O(n) — memo array + recursion stack
 */
function dp(s, n, idx, arr) {
    if (n === idx) {
        return 1;
    }

    if (s[idx] === "0") {
        return 0;
    }

    if (arr[idx] !== -1) return arr[idx]; // ✅

    let take = dp(s, n, idx + 1, arr);

    if (
        idx + 1 < n &&
        (s[idx] === "1" || (s[idx] === "2" && s[idx + 1] <= "6"))
    ) {
        take += dp(s, n, idx + 2, arr);
    }

    arr[idx] = take;
    return arr[idx];
}
var numDecodings = function (s) {
    return dp(s, s.length, 0, new Array(s.length).fill(-1));
};
let s = "226";
console.log(numDecodings(s))