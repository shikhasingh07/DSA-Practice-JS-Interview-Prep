var maxCoins = function (nums) {
    nums = [1, ...nums, 1];
    let n = nums.length;
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));


    for (let len = 2; len < n; len++) {
        for (let left = 0; left < n - len; left++) {
            let right = left + len;
            for (let k = left + 1; k < right; k++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    nums[left] * nums[k] * nums[right] + dp[left][k] + dp[k][right]
                );
            }

        }
    }

    return dp[0][n - 1];
};

let nums = [3, 1, 5, 8];
console.log(maxCoins(nums));