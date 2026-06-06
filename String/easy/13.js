var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]];
        let next = map[s[i + 1]];

        if (next > curr) {
            total -= curr;
        } else {
            total += map[s[i]];
        }

    }

    return total;
};
let s = "III";
console.log(romanToInt(s));