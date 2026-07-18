var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b)
    let dp = new Array(nums.length).fill(1);
    let parent = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                parent[i] = j;
            }
        }
    }

    let maxIndex = 0;
    for (let i = 1; i < dp.length; i++) {
        if (dp[i] > dp[maxIndex]) maxIndex = i;
    }

    let result = [];
    let idx = maxIndex;
    while (idx !== -1) {
        result.push(nums[idx]);
        idx = parent[idx]; // parent pe jao
    }

    return result.reverse();
    console.log(dp, parent);
};
console.log(largestDivisibleSubset([1, 2, 4, 8]))