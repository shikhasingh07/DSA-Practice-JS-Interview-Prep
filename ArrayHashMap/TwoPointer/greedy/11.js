var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let res = 0;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    res = Math.max(area, res);

    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return res;
};

console.log(maxArea([2,2,2]))
