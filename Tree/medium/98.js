var isValidBST = function (root) {
  function isBST(root, min, max) {
    if (root === null) {
      return true;
    }
    if ((min != null && root.val <= min) || (max != null && root.val >= max)) {
      return false;
    }

    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
  }

  return isBST(root, null, null);
};
let root = [2, 1, 3];
console.log(isValidBST(root));
