function dfs(u, v, list, visit) {
    if (u === v) {
        return true;
    }

    visit.add(u);

    for (let neigh of list[u]) {
        if (!visit.has(neigh) && dfs(neigh, v, list, visit)) return true;
    }
}
var findRedundantConnection = function (edges) {

    let list = Array.from({ length: edges.length + 1 }, () => []);

    for (let [u, v] of edges) {
        let visit = new Set();

        if (dfs(u, v, list, visit)) return [u, v];
        list[u].push(v);
        list[v].push(u);
    }

};

let edges = [[1, 2], [1, 3], [2, 3]];
console.log(findRedundantConnection(edges))