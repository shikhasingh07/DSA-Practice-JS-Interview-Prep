const isVaild = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (j < s.length) {
      if (isVaild(s, i, j)) {
        count++;
      }
      j++;
    }
  }
  return count;
};
let s = "aaa";
console.log(countSubstrings(s));
