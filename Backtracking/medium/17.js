function result (digits , idx  , current , map ,ans){
    if (!digits.length) return [];

    if (idx === digits.length) {
        ans.push(current.join(""));
        return ans;
    }

    for(let ch of map[digits[idx]]){
        current.push(ch); 
        result(digits , idx + 1 , current , map ,ans);
        current.pop();
    }
}
var letterCombinations = function (digits) {
    var ans = [];
    let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    result(digits, 0, [], map, ans)
    return ans;
};