var serialize = function(root) {
  // tree ko string mein convert karo
  // null nodes bhi store karo!
  let result = [];
  
  function dfs(node) {
    if (node === null) {
      result.push("null");
      return;
    }
    result.push(node.val);  // node ka value
    dfs(node.left);          // left
    dfs(node.right);          // right
  }
  
  dfs(root);
  return result.join(",");
};

var deserialize = function(data) {
  let nodes = data.split(",");
  let index = 0;
  
  function dfs() {
    if (nodes[index] === "null") {
      index++;
      return null;  // kya return karoge?
    }
    
    let node = new TreeNode(nodes[index]);
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  
  return dfs();
};

let root = [1,2,3,null,null,4,5]
console.log(serialize(root))