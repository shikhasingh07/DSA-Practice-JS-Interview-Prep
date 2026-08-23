var countBits = function (n) {
    let ans = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        let num = i, count = 0;
        while (num > 0) {
            if (num & 1) count++;
            num = num >> 1;
        }
        ans[i] = count;
    }

    return ans;
};
let n = 2;
console.log(countBits(n))