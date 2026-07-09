function dp(nums) {
    const arr = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {      // outer loop
        for (let j = 0; j < i; j++) {             // inner loop
            if (nums[j] < nums[i]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }
        }
    }

    return Math.max(...arr);
}
var lengthOfLIS = function (nums) {
    return dp(nums)
};
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums))