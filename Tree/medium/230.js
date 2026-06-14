var kthSmallest = function (root, k) {
  let result = [];

  function inorder(root) {
    if(root === null) return null; 

    inorder(root.left)
    result.push(root.val);
    inorder(root.right);
  }
  inorder(root)
  return result[k - 1];
};
let root = [3, 1, 4, null, 2],
  k = 1;
console.log(kthSmallest(root, k));
