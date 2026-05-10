var sumSubarrayMins = function (arr) {
  const n = arr.length;
  const left = new Array(n);
  const right = new Array(n);
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];

  // right[i] = distance to next smaller element
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  let result = 0;
  const MOD = 1e9 + 7;
  for (let i = 0; i < n; i++) {
    result = (result + arr[i] * left[i] * right[i]) % MOD;
  }
  return result;
};
let arr = [3, 1, 2, 4];
console.log(sumSubarrayMins(arr));
