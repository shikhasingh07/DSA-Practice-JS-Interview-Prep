var threeSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  //[-4 , -1 , -1 , 0 , 1 , 2]
  let ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          let sum = nums[left] + nums[right] + nums[i];
          if (sum === target) {
              ans.push([nums[i], nums[left], nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
          } else if (sum > target) {
              right--;
          } else {
              left++;
          }
      }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
