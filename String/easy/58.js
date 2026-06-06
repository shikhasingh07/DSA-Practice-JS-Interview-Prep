var lengthOfLastWord = function (s) {
  let ans = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && ans.length <= 0) {
      continue;
    } else if (s[i] === " " && ans.length > 0) {
      return ans.length;
    } else {
      ans += s[i];
    }
  }
  return ans.length;
};
let s = "a";
console.log(lengthOfLastWord(s));
