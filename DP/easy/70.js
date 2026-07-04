// top down
function dp(n, arr) {
    if (n <= 2) return n;
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (arr[n] !== 0) return arr[n];

    arr[n] = dp(n - 1, arr) + dp(n - 2, arr);
    return arr[n];
}

// bottom - up 

function table(n) {
    if (n <= 2) return n;

    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

var climbStairs = function (n) {
    return dp(n, new Array(n + 1).fill(0));
};

console.log(climbStairs(4))