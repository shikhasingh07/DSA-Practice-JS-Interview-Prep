var characterReplacement = function (s, k) {
  // map to count so map
  // left , count

  //   for right
  // window is invaild if k > count
  // Math.max

  let left = 0,
    count = 0,
    map = new Map(),
    result = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    count = Math.max(count, map.get(s[right]));

    while (right - left + 1 - count > k) {
      map.set(s[left], (map.get(s[left]) || 0) - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }
  return result;
};
let s = "ABAB",
  k = 2;
console.log(characterReplacement(s, k));
