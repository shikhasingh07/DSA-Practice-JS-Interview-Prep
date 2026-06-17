var hasPathSum = function (root, targetSum) {
  let total = 0;
  function hasTotal(root, targetSum) {
    if (root === null) {
      return null;
    }

    if (root.left === null && root.right === null) {
      return targetSum - root.val === 0;
    }

    return (
      hasTotal(root.left, targetSum - root.val) ||
      hasTotal(root.right, targetSum - root.val)
    );
  }
  return hasTotal(root, targetSum);
};
let root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
  targetSum = 22;
console.log(hasPathSum(root, targetSum));
