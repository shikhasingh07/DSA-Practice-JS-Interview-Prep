/**
 * 📚 Stack the Shelves — Filling Bookcase Shelves
 *
 * # Intuition
 * Books ka order fixed hai — sirf decide karna hai shelf break kahan lagaao.
 * Har book i ke liye, j peeche jaao aur best shelf grouping dhundho.
 * Lookback DP — same pattern as LIS!
 *
 * # Approach
 * 1. dp[i] = min height to place first i books
 * 2. For each i, go backwards j = i → 1:
 *    - Accumulate width, track maxH of books j..i
 *    - If width > shelfWidth → break
 *    - dp[i] = min(dp[i], dp[j-1] + maxH)
 * 3. Return dp[n]
 *
 * # Complexity
 * - Time: O(n²)
 * - Space: O(n)
 */
var minHeightShelves = function (books, shelfWidth) {
    const dp = new Array(books.length + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 0; i <= books.length; i++) {
        let width = 0, maxH = 0;
        for (let j = i; j >= 1; j--) {
            width += books[j - 1][0];
            if (width > shelfWidth) break;
            maxH = Math.max(maxH, books[j - 1][1]);
            dp[i] = Math.min(dp[i], dp[j - 1] + maxH)
        }
    }

    return dp[books.length];
};
let books = [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], shelfWidth = 4;
console.log(minHeightShelves(books, shelfWidth))