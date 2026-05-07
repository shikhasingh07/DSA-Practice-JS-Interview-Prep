var isValid = function (s) {
  let stack = [];
  for (let item of s) {
    if (item === "[" || item === "{" || item === "(") {
      stack.push(item);
    } else if (
      (item === "}" && stack.pop() !== "{") ||
      (item === "]" && stack.pop() !== "[") ||
      (item === ")" && stack.pop() !== "(")
    ) {
      return false;
    }
  }

  return stack.length === 0;
};
let s = "([)]";
console.log(isValid(s));
