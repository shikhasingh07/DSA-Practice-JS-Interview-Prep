var levelOrder = function (root) {
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

      if(node.right){
        queue.push(node.right); 
      }
    }
    ans.push(level);
  }
  return ans;
};
let root = [3, 9, 20, null, null, 15, 7];
console.log(levelOrder(root));
