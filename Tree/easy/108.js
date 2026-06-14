var sortedArrayToBST = function (nums) {
  let mid = Math.floor(nums.length / 2);

  if (nums.length === 0) return null;

  let node = new TreeNode(nums[mid]);

  let left = sortedArrayToBST(nums.slice(0, mid));
  let right = sortedArrayToBST(nums.slice(mid + 1));

  node['left'] = left; 
  node['right'] = right;

  return node;
};
let nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
