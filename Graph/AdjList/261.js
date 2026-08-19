/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function dfs(list, visit, i , parent) {
   if (visit.has(i)) {
        return true;
    }

    visit.add(i);
    for (let neighbor of list[i]) {
        if (neighbor === parent) continue;
        if (dfs(list, visit, neighbor, i)) return true; // ← i as parent
    }

} 
var validTree = function(n, edges) {
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
            if (dfs(list, visit, i, -1)) return false;

        }
    }
    return visit.size === n;
};