var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return root;
  }
  if (root === p || root === q) {
    return root;
  }

  let llca = lowestCommonAncestor(root.left, p, q);
  let rlca = lowestCommonAncestor(root.right, p, q);

  if (llca !== null && rlca !== null) return root;
  return llca !== null ? llca : rlca;
};
let root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 8;
console.log(lowestCommonAncestor(root, p, q));
