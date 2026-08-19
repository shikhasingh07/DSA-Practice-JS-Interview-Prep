function dfs(node, list, state, result) {

    if (state[node] === 1) return true;

    if (state[node] === 2) return false;


    state[node] = 1;
    for (let neigbhor of list[node]) {
        if (dfs(neigbhor, list, state, result)) {
            return true
        }
    }
    state[node] = 2;
    result.push(node);
    return false;
}
var findOrder = function (numCourses, prerequisites) {

    let list = Array.from({ length: numCourses }, () => []);

    for (let [u, v] of prerequisites) {
        list[v].push(u);
    }

    let state = new Array(numCourses).fill(0);

    let result = [];
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, list, state, result)) return [];
    }

    return result.reverse();
};
let numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
console.log(findOrder(numCourses, prerequisites))