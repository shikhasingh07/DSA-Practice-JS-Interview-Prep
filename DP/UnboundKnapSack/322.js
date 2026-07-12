/**
 * 🪙 Fewest Coins, Maximum Greed — Coin Change
 *
 * # Intuition
 * At each amount, try every coin and pick the one that leads to minimum total coins.
 * Same coin can be reused — unbounded knapsack style.
 *
 * # Approach (Top-Down)
 * 1. dp(amount) = min coins to make this amount
 * 2. Base: amount === 0 → 0 coins, amount < 0 → Infinity
 * 3. For each coin: min(dp(amount - coin) + 1)
 * 4. Memoize by amount
 *
 * # Approach (Bottom-Up)
 * 1. dp[0] = 0, rest = Infinity
 * 2. For each amount i, try every coin: dp[i] = min(dp[i], dp[i - coin] + 1)
 *
 * # Complexity
 * - Time: O(amount × coins)
 * - Space: O(amount)
 */

// Top-Down
function dp(coins, amount, arr) {
    if (amount === 0) return 0;
    if (arr[amount] !== undefined) return arr[amount];
    if (amount < 0) return Infinity;

    let take = Infinity;
    for (let coin of coins) {
        take = Math.min(take, 1 + dp(coins, amount - coin, arr));
    }
    arr[amount] = take;
    return take;
}

var coinChange = function (coins, amount) {
    let result = dp(coins, amount, new Array(amount + 1));
    return result === Infinity ? -1 : result;
};

// Bottom-Up
function coinChangeBottomUp(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

let coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins, amount));
console.log(coinChangeBottomUp(coins, amount));
