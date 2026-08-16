function dfs(graph, set, node) {
    set.add(node);
    for (let neighbor of graph[node]) {
        if (!set.has(neighbor)) dfs(graph, set, neighbor);
    }
}
var countComponents = (n, edges) => {
    let list = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        list[u].push(v);
        list[v].push(u);
    }

    let set = new Set();
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!set.has(i)) {
            dfs(list, set, i)
            count++;
        }
    }

    return count;
}

let n = 5, edges = [[0, 1], [1, 2], [3, 4]];
console.log(countComponents(n, edges));