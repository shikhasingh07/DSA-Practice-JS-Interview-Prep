var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
};
let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
