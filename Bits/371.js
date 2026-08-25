var getSum = function (a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;  // carry
        a = a ^ b;                  // sum without carry
        b = carry;                  // repeat with carry
    }
    return a;
};
let a = 1, b = 2;
console.log(getSum(a, b))