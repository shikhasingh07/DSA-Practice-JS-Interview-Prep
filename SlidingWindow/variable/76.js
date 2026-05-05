var minWindow = function (s, t) {
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);

  const required = need.size;
  let formed = 0;
  const window = new Map();

  let left = 0,
    minLen = Infinity,
    minStart = 0;

  for (let right = 0; right < s.length; right++) {
    window.set(s[right], (window.get(s[right]) || 0) + 1);
    if (need.has(s[right]) && window.get(s[right]) === need.get(s[right]))
      formed++;

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }
      window.set(s[left], window.get(s[left]) - 1);
      if (need.has(s[left]) && window.get(s[left]) < need.get(s[left]))
        formed--;
      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};

let s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
