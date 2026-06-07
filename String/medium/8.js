var myAtoi = function (s) {
  let digit = 0,
    i = 0;

  while (s[i] === " ") i++;

  let sign = 1;
  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  let result = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - "0"); // char to number
    i++;
  }

  result *= sign;

  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;
  return Math.max(MIN, Math.min(MAX, result));
};
let s = " -042";
console.log(myAtoi(s));
