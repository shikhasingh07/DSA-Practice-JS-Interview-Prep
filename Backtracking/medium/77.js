function result(n, idx, current, ans, k) {
    if (current.length === k) {
        ans.push([...current]);
        return ans;
    }

    for (let i = idx; i < n; i++) {
        if (n === 0) {
            return;
        }

        current.push(i + 1);
        result(n, i + 1, current, ans, k);
        current.pop()

    }
}
var combine = function (n, k) {
    let ans = [];
    result(n, 0, [], ans, k);
    return ans;
};

console.log(combine(4, 2))