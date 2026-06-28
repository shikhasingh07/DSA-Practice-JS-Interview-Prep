function result(arr, n, idx, current, ans, target) {
    if (target === 0) {
        ans.push([...current]);
        return ans;
    }

    for (let i = idx; i < n; i++) {
        if (i > idx && arr[i] === arr[i - 1]) continue;
        if (arr[i] > target) break;
        current.push(arr[i]);
        result(arr, n, i + 1, current, ans, target - arr[i]);
        current.pop();
    }
}

var combinationSum2 = function (candidates, target) {
    let ans = [];
    result(
        candidates.sort((a, b) => a - b),
        candidates.length,
        0,
        [],
        ans,
        target,
    );
    return ans;
};
let candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
console.log(combinationSum2(candidates, target));
