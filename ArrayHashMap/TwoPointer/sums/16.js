var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let closed = nums[0] + nums[1] + nums[2];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] && nums[index] === nums[index - 1]) continue;

    let left = index + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[index] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closed - target)) {
        closed = sum;
      }
      if(sum < target) {
        left++;
      }else if(sum > target){
        right --; 
      }else {
        return target; 
      }
    }
  }
  return closed;
};
let nums = [-1,2,1,-4];
console.log(threeSumClosest(nums,1));
