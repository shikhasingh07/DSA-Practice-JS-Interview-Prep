var isSubtree = function (root, subRoot) {
  var isSameTree = function (p, q) {
    if (p === null || q === null) return p === q;

    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };

  if (root === null) return false;

  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
let root = [3, 4, 5, 1, 2],
  subRoot = [4, 1, 2];
console.log(isSubtree(root, subRoot));
