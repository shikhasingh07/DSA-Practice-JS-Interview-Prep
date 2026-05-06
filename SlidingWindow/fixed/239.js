var maxSlidingWindow = function (nums, k) {
  const deque = [];

  let max = 0,
    ans = [];

  for (let right = 0; right < nums.length; right++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[right]) {
      deque.pop();
    }

    if (deque[0] <= right - k) {
      deque.shift();
    }
    deque.push(right);
    if (right >= k - 1) {
      ans.push(nums[deque[0]]);
    }
  }
  return ans;
};
let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
