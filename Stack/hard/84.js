var largestRectangleArea = function (heights) {
  let n = heights.length;
  let stack = [];
  const left = new Array(n);
  const right = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, heights[i] * (right[i] - left[i] - 1)); 
  }
  return result;
};
let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
