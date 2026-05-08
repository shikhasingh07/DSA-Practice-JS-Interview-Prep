var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ans = new Array(temperatures.length).fill(0)
  for (let idx = 0; idx < temperatures.length; idx++) {
    while (temperatures[idx] > temperatures[stack[stack.length - 1]]) {
      let top = stack[stack.length - 1];
      let popped = idx - top;
      ans[top] = popped;
      stack.pop();
    }
    stack.push(idx);
  }
  return ans;
};
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
