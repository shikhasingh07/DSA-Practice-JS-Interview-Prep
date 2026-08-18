function dfs(node, state, list) {

    if (state[node] === 1) return true;

    if (state[node] === 2) return;

    state[node] = 1;

    for (let neighbors of list[node]) {
        if (dfs(neighbors, state, list)) return true;
    }

    state[node] = 2
}
var canFinish = function (numCourses, prerequisites) {

    let list = Array.from({ length: numCourses }, () => []);

    for (let [u, v] of prerequisites) {
        list[u].push(v)
    }

    let state = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, state, list)) return false;
    }
    return true;
};
let numCourses = 2, prerequisites = [[1, 0]];
console.log(canFinish(numCourses, prerequisites))