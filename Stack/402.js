var removeKdigits = function (num, k) {
  let stack = [];
  for (let item of nums) {
    let top = stack[stack.length - 1];
    while (k > 0 && stack.length > 0 && item < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(item);
  }
  stack = stack.slice(0, stack.length - k);
  return stack.join("");
};

let num = "1432219",
  k = 3;
console.log(removeKdigits(num, k));
