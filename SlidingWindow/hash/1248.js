function atMost(nums, k) {
  let result = 0,
    left = 0,
    count = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 !== 0) {
      count++;
    }

    while (count > k) {
      if (nums[left] % 2 !== 0) count--;
      left++;
    }
    result += right - left + 1;
  }
  return result;
}

var numberOfSubarrays = function (nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
};
let nums = [1, 1, 2, 1, 1],
  k = 3;
console.log(numberOfSubarrays(nums, k));
