function dfs(grid, i, j, visit) {

    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return 0;
    if (visit.has(`${i},${j}`) || grid[i][j] === 0) return 0;

    visit.add(`${i},${j}`);
    return 1 + dfs(grid, i + 1, j, visit) +
        dfs(grid, i - 1, j, visit) +
        dfs(grid, i, j + 1, visit) +
        dfs(grid, i, j - 1, visit);

}
var maxAreaOfIsland = function (grid) {

    let visit = new Set();
    let maxareas = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && !visit.has(`${i},${j}`)) {
                maxareas = Math.max(maxareas, dfs(grid, i, j, visit));
            }
        }
    }

    return maxareas;
};

let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];
console.log(maxAreaOfIsland(grid))