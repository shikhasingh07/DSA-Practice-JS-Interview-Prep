var calPoints = function (operations) {
  const stack = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
     stack.push(stack[stack.length - 1] * 2);
    } else if (op === "+") {
      stack.push(stack[stack.length-1] + stack[stack.length-2]);
    } else {
      stack.push(Number(op));
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};
let ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));
