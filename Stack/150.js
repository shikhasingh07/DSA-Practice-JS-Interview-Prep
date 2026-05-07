var evalRPN = function (tokens) {
  const stack = [];
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (const token of tokens) {
    if (ops.has(token)) {
      const b = stack.pop();
      const a = stack.pop();
      let t = ops[token](a, b);
      stack.push(t);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};
let tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));
