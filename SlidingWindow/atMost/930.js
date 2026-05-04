function atMost(nums, goal) {
  let left = 0,
    count = 0,
    result = 0;
  if (goal < 0) return 0;  
  for (let right = 0; right < nums.length; right++) {
    count += nums[right];

    while (count > goal) {
      count -= nums[left];
      left++;
    }
    result += right - left + 1;
  }
  return result;
}
var numSubarraysWithSum = function (nums, goal) {
  return atMost(nums, goal) - atMost(nums, goal - 1);
};
let nums = [0 , 0 , 0 ,0 , 0],
  goal = 0;
console.log(numSubarraysWithSum(nums, goal));
