var findDuplicate = function (nums) {
  // find middle
  // reset the head
  // find slow === fast
  // return slow

  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      slow = nums[0];
      while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
      }
      return slow;
    }
  }
  return null;
};
let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
