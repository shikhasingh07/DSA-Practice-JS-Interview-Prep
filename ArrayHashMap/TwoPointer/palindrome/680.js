const check = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return check(s, left + 1, right) || check(s, left, right - 1);
    }

    left++;
    right--;
  }

  return true;
};
let s = "abca";
console.log(validPalindrome(s));
