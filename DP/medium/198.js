function dp(nums, n, arr) {
    if (n < 0) return 0;
    if (n === 0) return nums[0];

    if (arr[n] !== -1) return arr[n];

    let take = dp(nums, n - 2, arr) + nums[n];
    let skip = dp(nums , n - 1 , arr) ; 
    
    arr[n] = Math.max(take , skip); 
    return arr[n];
}
var rob = function (nums) {
    return dp(nums, nums.length - 1, new Array(nums.length).fill(-1));
};
let nums = [2, 7, 9, 3, 1];
console.log(rob(nums))