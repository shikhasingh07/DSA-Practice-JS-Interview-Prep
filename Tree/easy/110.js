var isBalanced = function (root) {
  function helper(node) {
    if (node === null) {
      return 0;
    }

    let Lh = helper(node.left);
    let Rh = helper(node.right);

    if (Lh === -1 || Rh === -1) return -1;
    if (Math.abs(Lh - Rh) > 1) return -1;

    return 1 + Math.max(Lh, Rh);
  }
  return helper(root) !== -1;
};
let root = [3, 9, 20, null, null, 15, 7];
console.log(isBalanced(root));
