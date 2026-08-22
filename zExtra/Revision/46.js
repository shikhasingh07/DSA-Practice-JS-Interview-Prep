function dfs(idx, nums, n, used, result , ans) {

    if (idx === n) {
        result.push([...ans]);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (used[i]) continue;

        used[i] = true;
        ans.push(nums[i]);
        dfs(idx + 1, nums, n, used, result , ans);
        ans.pop();
        used[i] = false;
    }

}
var permute = function (nums) {
    let result = [];

    let used = new Array(nums.length).fill(false);

    dfs(0, nums, nums.length, used, result, []);
    return result;

};
let nums = [1, 2, 3];
console.log(permute(nums));