function anagram(a, b) {
  if (a.size !== b.size) return false;
  for (let [key, val] of a) {
    if (b.get(key) !== val) return false;
  }
  return true;
}
var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];
  let map = new Map();

  for (let i = 0; i < p.length; i++) {
    map.set(p[i], (map.get(p[i]) || 0) + 1);
  }

  let left = 0,
    windowMap = new Map();
  let result = [];
  for (let right = 0; right < s.length; right++) {
    windowMap.set(s[right], (windowMap.get(s[right]) || 0) + 1);

    if (right >= p.length) {
      const leftChar = s[left];
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);
      if (windowMap.get(leftChar) === 0) windowMap.delete(leftChar);
      left++;
    }

    if (right >= p.length - 1) {
      if (anagram(map, windowMap)) {
        result.push(left);
      }
    }
  }
  return result;
};
let s = "cbaebabacd",
  p = "abc";
console.log(findAnagrams(s, p));
