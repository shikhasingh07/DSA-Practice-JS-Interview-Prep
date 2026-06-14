var searchBST = function (root, val) {
  if (root === null) {
    return root;
  }

  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
let root = [4, 2, 7, 1, 3],
  val = 2;
console.log(searchBST(root, val));
