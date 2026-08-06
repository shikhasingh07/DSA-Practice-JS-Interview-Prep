var isAlienSorted = function (words, order) {
    let map = {};

    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        let w1 = words[i], w2 = words[i + 1];
        for (let j = 0; j < w1.length; j++) {
            if (j >= w2.length) return false;
            if (map[w1[j]] < map[w2[j]]) break;
            if (map[w1[j]] > map[w2[j]]) return false;
        }
    }

    return true;
};

let words = ["word", "world", "row"], order = "worldabcefghijkmnpqstuvxyz"
console.log(isAlienSorted(words, order))