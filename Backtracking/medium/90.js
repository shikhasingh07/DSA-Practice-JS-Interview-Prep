function result(nums, n, idx, current, ans) {
    ans.push([...current]);

    for (let i = idx; i < n; i++) {
        if (i > idx && nums[i] === nums[i - 1]) continue;

        current.push(nums[i]);
        result(nums, n, i + 1, current, ans);
        current.pop();
    }
}
var subsetsWithDup = function (nums) {
    let ans = [];
    result(nums.sort((a, b) => a - b), nums.length, 0, [], ans);
    return ans;
};
let nums = [1, 2, 2];
console.log(subsetsWithDup(nums))