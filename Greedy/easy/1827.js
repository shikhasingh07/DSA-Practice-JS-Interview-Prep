var minOperations = function (nums) {
  // counter to count conversion
  // loop from backend and check in every step
  // if i check i > i - 1 then its fine otherwise conversion
  // if yes then count
  // return count

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      count += nums[i - 1] + 1 - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }
  return count;
};

let nums = [1, 1, 1];
console.log(minOperations(nums));
console.log(minOperations([1, 1, 1])); 