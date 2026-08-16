function dfs(node, visit) {
   if(visit.has(node)) return visit.get(node);
   let clone = new Node(node.val);
   visit.set(node, clone);
   for (let neighbor of node.neighbors){
    clone.neighbors.push(dfs(neighbor, visit));
   }
   return clone
}

var cloneGraph = function (node) {
    if (!node) return null;
    let cloneMap = new Map();
    return dfs(node, cloneMap);

};
let adjList = [[2, 4], [1, 3], [2, 4], [1, 3]];
console.log(cloneGraph(adjList))