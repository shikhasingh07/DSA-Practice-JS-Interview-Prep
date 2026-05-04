var lengthOfLongestSubstringKDistinct = function (s, k) {
  let left = 0,
    map = new Map(),
    result = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};
let str = "eceba",
  k = 2;
console.log(lengthOfLongestSubstringKDistinct(str, k));
