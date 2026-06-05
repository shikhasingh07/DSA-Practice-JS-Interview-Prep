var longestCommonPrefix = function (strs) {
  let ch,
    ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    ch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (ch !== strs[j][i]) {
        return ans;
      }
      
    }
    ans += ch;
  }
 return ans;
};
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
