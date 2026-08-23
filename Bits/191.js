var hammingWeight = function (n) {

    let number = 0;
    while (n > 0) {
        if (n & 1) {
            number++;
        }
        n = n >> 1;
    }

    return number
};

console.log(hammingWeight(11))