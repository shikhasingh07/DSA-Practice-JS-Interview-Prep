var findSmallestSetOfVertices = function (n, edges) {
  let graph = new Array(n).fill(0);

  for (let [u, v] of edges) {
    graph[v]++;
  }

  let ans = [];

  for (let i = 0; i < n; i++) {
    if (graph[i] === 0) {
      ans.push(i);
    }
  }

  return ans;
};

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ]),
);
