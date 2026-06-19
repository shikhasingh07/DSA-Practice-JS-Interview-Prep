var reverseOddLevels = function (root) {
  let queue = [root];
  let level = 0;

  while (queue.length > 0) {
    let size = queue.length;
    let currentLevel = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentLevel.push(node);
      if (node.left) queue.push(node.left); // children add karo
      if (node.right) queue.push(node.right);
    }

    if (level % 2 === 1) {
      // odd level check
      // values reverse karo
      let left = 0,
        right = currentLevel.length - 1;
      while (left < right) {
        let temp = currentLevel[left].val;
        currentLevel[left].val = currentLevel[right].val;
        currentLevel[right].val = temp;
        left++; right--; 
      }
    }

    level++;
  }

  return root;
};
let root = [2, 3, 5, 8, 13, 21, 34];
console.log(reverseOddLevels(root));
