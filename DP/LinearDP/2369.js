function dp(nums, n, arr) {
    arr[0] = true;

    for (let i = 2; i <= n; i++) {
        // 2 ke liye 
        if (nums[i - 1] === nums[i - 2]) arr[i] = arr[i] || arr[i - 2];
        if (i >= 3 && nums[i - 1] === nums[i - 2] && nums[i - 2] === nums[i - 3]) arr[i] = arr[i] || arr[i - 3];
        if (i >= 3 && nums[i - 1] === nums[i - 2] + 1 && nums[i - 2] === nums[i - 3] + 1) arr[i] = arr[i] || arr[i - 3];
    }

    return arr[n];
}
var validPartition = function (nums) {
    return dp(nums, nums.length, new Array(nums.length + 1).fill(false))
};

console.log(validPartition(nums = [4, 4, 4, 5, 6]))