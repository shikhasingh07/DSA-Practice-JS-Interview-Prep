function dfs(list, visit, i) {
    if (visit.has(i)) {
        return true;
    }

    visit.add(i);
    for (let neighbor of list[i]) {
        if (!visit.has(neighbor)) dfs(list, visit, neighbor);
    }

}
var validTree = (n, edges) => {
    if (edges.length !== n - 1) return false;
    let list = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        list[u].push(v);
        list[v].push(u);
    }

    let visit = new Set();
    let vaild = true;

    for (let i = 0; i < n; i++) {
        if (!visit.has(i)) {
            dfs(list, visit, i);
        }
    }

    return visit.size === n;
}

let n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(validTree(n,edges));