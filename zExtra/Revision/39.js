function dfs(nums, n, idx, ans, result, target) {
    if (target === 0) {
        ans.push([...result]);
        return ans;
    }


    for (let i = idx; i < nums.length; i++) {
        if (nums[i] > target) continue;
        result.push(nums[i]);
        dfs(nums, n, i, ans, result, target - nums[i]);
        result.pop();
    }
}
var combinationSum = function (candidates, target) {

    let ans = [];
    dfs(candidates, candidates.length, 0, ans, [], target);
    return ans;
};

let candidates = [2, 3, 6, 7], target = 7;
console.log(combinationSum(candidates, target));