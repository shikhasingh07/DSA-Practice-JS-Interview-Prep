var rangeBitwiseAnd = function (left, right) {

    let count = 0;
    while (left !== right) {

        left = left >> 1;
        right = right >> 1;
        count++;

    }

    return left << count;
};
let left = 5, right = 7;
console.log(rangeBitwiseAnd(left , right))