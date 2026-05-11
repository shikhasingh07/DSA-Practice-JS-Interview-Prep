var calculate = function (s) {
  let stack = [];
  let num = 0;
  let prevOp = "+";

  for (let item of s) {
    if (!isNaN(item) && item !== " ") {
      // digit → number build karo
      num = num * 10 + Number(item);
    } else if (item !== " ") {
      // operator → prevOp se process karo
      if (prevOp === "+") stack.push(num);
      else if (prevOp === "-") stack.push(-num);
      else if (prevOp === "*") stack.push(stack.pop() * num);
      else if (prevOp === "/") stack.push(Math.trunc(stack.pop() / num));
      prevOp = item;
      num = 0;
    }
  }
  if (prevOp === "+") stack.push(num);
  else if (prevOp === "-") stack.push(-num);
  else if (prevOp === "*") stack.push(stack.pop() * num);
  else if (prevOp === "/") stack.push(Math.trunc(stack.pop() / num));
  
  let result = 0;
  while (stack.length > 0) {
    result += stack[stack.length - 1];
    stack.pop();
  }
  return result;
};

console.log(calculate("3+2*2"));   // 7
console.log(calculate("3/2"));     // 1
console.log(calculate("3+5/2"));   // 5
