const hasDuplicate = (s, len) => {
  let set = new Set();
  for (let i = 0; i <= s.length - len; i++) {
    let sub = s.substring(i, i + len);
    if (set.has(sub)) return i; // return start index
    set.add(sub);
  }
  return -1;
};
var longestDupSubstring = function (s) {
  let result = "";

  let left = 1,
    right = s.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let idx = hasDuplicate(s, mid);

    if (idx !== -1) {
      result = s.substring(idx, idx + mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
let s = "aa";
console.log(longestDupSubstring(s));
