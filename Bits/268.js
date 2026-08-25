var missingNumber = function (nums) {

    let result = nums.length;
    for (let num = 0; num < nums.length; num++) {
        result ^= num ^ nums[num];
    }

    return result;
};
let nums = [3, 0, 1];
console.log(missingNumber(nums))