var productExceptSelf = function (nums) {
  // all product
  // left , right , output = []
  // loop
  // left prefix
  //  how to find reight prefix
  // output[i] = left * right;
  // return output

  let left = [],
    right = [],
    output = [],
    n = nums.length;
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    output[i] = left[i] * right[i];
  }

  return output;
};
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
