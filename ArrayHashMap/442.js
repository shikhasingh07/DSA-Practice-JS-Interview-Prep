var findDuplicates = function (nums) {
  let map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  console.log(map)
  let ans = [];
  for (let num = 0; num <= nums.length; num++) {
    if (map[num] > 1) {
      ans.push(num);
    }
  }
  return ans;
};
let nums = [2,2];
console.log(findDuplicates(nums));
