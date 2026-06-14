var goodNodes = function (root) {
  let count = 0;
  function greater(root, gVal) {
    if (root === null) {
      return;
    }
    if (root.val >= gVal) {
      count++;
    }

    gVal = Math.max(gVal, root.val);
    greater(root.left, gVal);
    greater(root.right, gVal);
  }
  greater(root, root.val);
  return count;
};
let root = [3, 1, 4, 3, null, 1, 5];
console.log(goodNodes(root));
