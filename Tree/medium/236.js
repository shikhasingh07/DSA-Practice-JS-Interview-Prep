var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return root;
  }
  if (root === p || root === q) {
    return root;
  }
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
};
let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;
console.log(lowestCommonAncestor);
