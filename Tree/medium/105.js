var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  let root = preorder[0];
  let node = new TreeNode(root);
  let index = inorder.indexOf(root);

  node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return node;
};
let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
