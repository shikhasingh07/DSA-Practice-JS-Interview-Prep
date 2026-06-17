var maxPathSum = function (root) {
  let maxSum = -Infinity;
  function dfs(node) {
    if (node === null) return 0; // kya return karoge?

    let left = Math.max(dfs(node.left), 0); // left se max gain
    let right = Math.max(dfs(node.right), 0); // right se max gain

    // global max update karo (left + node + right)
    maxSum = Math.max(maxSum, left + node.val + right);

    // parent ko sirf EK side return karo
    return node.val + Math.max(left, right);
  }

  dfs(root);
  return maxSum;
};
let root = [-10, 9, 20, null, null, 15, 7];
console.log(maxPathSum(root));
