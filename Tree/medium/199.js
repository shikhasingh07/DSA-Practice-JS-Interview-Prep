var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length > 0) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(level[level.length - 1])
  }
  return ans;
};
let root = [1, 2, 3, null, 5, null, 4];
console.log(rightSideView(root));
