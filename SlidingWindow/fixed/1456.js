var maxVowels = function (s, k) {
  let count = 0;
  let maxCount = 0;

  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let str = 0; str < s.length; str++) {
    if (vowels.has(s[str])) count++;

    if (str >= k && vowels.has(s[str - k])) {
      count--;
    }

    if (str >= k - 1) {
      maxCount = Math.max(count, maxCount);
    }
  }
  return maxCount;
};
let s = "abciiidef",
  k = 3;
console.log(maxVowels(s, k));
