function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
}

var longestPalindrome = function (s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    let odd = expand(s, i, i); // odd length: single center
    let even = expand(s, i, i + 1); // even length: two centers

    if (odd.length > ans.length) ans = odd;
    if (even.length > ans.length) ans = even;
  }
  return ans;
};
let s = "babad";
console.log(longestPalindrome(s));
