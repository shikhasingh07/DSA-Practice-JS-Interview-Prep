function mapsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (let [key, val] of a) {
    if (b.get(key) !== val) return false;
  }
  return true;
}

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let map = new Map();
  for (let right = 0; right < s1.length; right++) {
    map.set(s1[right], (map.get(s1[right]) || 0) + 1);
  }

  let windowMap = new Map();
  for (let i = 0; i < s2.length; i++) {
    windowMap.set(s2[i], (windowMap.get(s2[i]) || 0) + 1);

    if (i >= s1.length) {
      const left = s2[i - s1.length];
      windowMap.set(left, windowMap.get(left) - 1);
      if (windowMap.get(left) === 0) windowMap.delete(left);
    }

    if (i >= s1.length - 1) {
      if (mapsEqual(map, windowMap)) return true;
    }
  }
  return false;
};
let s1 = "ab",
  s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));
