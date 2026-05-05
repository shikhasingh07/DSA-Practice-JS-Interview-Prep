var longestSubstring = function (s, k) {
  let result = 0;

  for (let m = 1; m <= 26; m++) {
    let left = 0,
      map = new Map(),
      validCount = 0;

    for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);

      if (map.get(s[right]) === k) validCount++;

      while (map.size > m) {
        map.set(s[left], (map.get(s[left]) || 0) - 1);
        if (map.get(s[left]) === k - 1) validCount--;
        if (map.get(s[left]) === 0) map.delete(s[left]);
        left++;
      }

      if (validCount === m) {
        result = Math.max(result, right - left + 1);
      }
    }
  }

  return result;
};
let s = "ababbc",
  k = 2;
console.log(longestSubstring(s, k));
