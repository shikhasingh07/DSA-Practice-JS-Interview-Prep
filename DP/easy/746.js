function dp(cost, n, arr) {
    if (n <= 1) return 0;

    if (arr[n] !== null) return arr[n];

    arr[n] = Math.min(dp(cost, n - 1, arr) + cost[n - 1],
        dp(cost, n - 2, arr) + cost[n - 2])

    return arr[n];
}
var minCostClimbingStairs = function (cost) {
    return dp(cost, cost.length, new Array(cost.length+1).fill(null))
};

console.log(minCostClimbingStairs([1,2,1,2,1,1,1]))
