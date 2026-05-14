var maxSubArray = function (nums) {
  // total , cs
  // loop
  // cs = max(nums[i] , cs+nums[i])
  //  if cs > total then total update
  // return total

  let total = -Infinity,
    cs = 0;
  for (let i = 0; i < nums.length; i++) {
    cs = Math.max(nums[i] , cs+nums[i]); 
    if(cs > total){
        total = cs; 
    }
  }
  return total
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
