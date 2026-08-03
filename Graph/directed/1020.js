function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    if (grid[i][j] !== 1) return;
    grid[i][j] = 0;
    dfs(grid, i + 1, j); dfs(grid, i - 1, j);
    dfs(grid, i, j + 1); dfs(grid, i, j - 1);
}
var numEnclaves = function (grid) {
    let rows = grid.length, cols = grid[0].length;

    for (let j = 0; j < cols; j++) {
        if (grid[0][j] === 1) dfs(grid, 0, j);
        if (grid[rows - 1][j] === 1) dfs(grid, rows - 1, j);
    }
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 1) dfs(grid, i, 0);
        if (grid[i][cols - 1] === 1) dfs(grid, i, cols - 1);
    }

    console.log(grid)
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) count++;
        }
    }
    return count;
};
let grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
console.log(numEnclaves(grid))