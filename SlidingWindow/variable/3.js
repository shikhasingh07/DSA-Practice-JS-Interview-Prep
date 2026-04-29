var lengthOfLongestSubstring = function (s) {
  let total = 0;
  let max = 0;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (map.has(ch)) {
      max = Math.max(map.get(ch) + 1, max);
    }

    map.set(ch, i);

    total = Math.max(total, i - max + 1);
  }

  return total;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
