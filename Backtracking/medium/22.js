function result(n, open, close, current, ans) {
    if (current.length === 2 * n) {
        ans.push(current);
        return ans;
    }

    if (open < n) {
        result(n, open + 1, close, current + "(", ans);
    }

    if (close < open) {
        result(n, open , close + 1, current + ")", ans);
    }

}

var generateParenthesis = function (n) {
    let ans = [];
    result(n, 0, 0, "", ans);
    return ans;
};

console.log(generateParenthesis(3))