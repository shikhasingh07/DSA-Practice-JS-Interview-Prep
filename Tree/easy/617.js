var mergeTrees = function (root1, root2) {
  // root1 null hai tho return root2
  // root2 null hai tho return root1
  // create a new tree
  //    if(root1.left ar root2.left) ka sum in new treenode
  //    if (root1.right ar root2.right) ka sum in treenode
  //  return new tree
  if(!root1) return root2; 
  if(!root2) return root1;
  let mergedNode = new TreeNode(root1.val + root2.val);
  mergedNode.left = merge(root1.left, root2.left);
  mergedNode.right = merge(root1.right, root2.right);
  return mergedNode;
};

let root1 = [1, 3, 2, 5],
  root2 = [2, 1, 3, null, 4, null, 7];
console.log(root1, root2);
