var equalSubstring = function (s, t, maxCost) {
  // count i need
  let left = 0,
    cost = 0,
    result = 0;
  // right - > left
  for (let right = 0; right < s.length; right++) {
    // if count > maxcount
    cost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

    while (cost > maxCost) {
      cost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }

    // max value return
    result = Math.max(result, right - left + 1);
  }
  return result;
};
let s = "abcd",
  t = "cdef",
  maxCost = 3;
console.log(equalSubstring(s, t, maxCost));
