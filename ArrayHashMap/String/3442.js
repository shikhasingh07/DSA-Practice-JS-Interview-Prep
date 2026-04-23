var maxDifference = function (s) {
  let map = {};
  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let maxOdd = 0;
  let minEven = Infinity;

  for (let ch of Object.keys(map)) {
    let freq = map[ch];

    if (freq % 2 === 1) {
      maxOdd = Math.max(maxOdd, freq);
    } else {
      minEven = Math.min(minEven, freq);
    }
  }

  return maxOdd - minEven;
};

console.log(maxDifference("aaaaabbc"));
