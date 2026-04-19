function compre(str) {
  let stack = [];

  for (let ch of str) {
    if (ch === "#") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
}

var backspaceCompare = function (s, t) {
  return compre(s) === compre(t);
};

console.log(backspaceCompare("ab#", "cd##"));
