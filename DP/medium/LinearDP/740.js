function dp(nums, max, map, arr) {

    if (max < 0) return 0;
    if (max === 0) return map[max] || 0;

    if (arr[max] !== -1) return arr[max]
    let take = dp(nums, max - 2, map, arr) + (map[max] || 0);
    let skip = dp(nums, max - 1, map, arr)

    arr[max] = Math.max(take, skip);
    return arr[max];
}
var deleteAndEarn = function (nums) {
    let map = {};

    for (let num of nums) {
        map[num] = (map[num] || 0) + num;
    }
    const max = Math.max(...nums);

    return dp(nums, max, map, new Array(max + 1).fill(-1));
};
let nums = [3, 4, 2];
console.log(deleteAndEarn(nums))