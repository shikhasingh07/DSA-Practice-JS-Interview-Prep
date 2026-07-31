function dfs(grid, i, j, visited) {

    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    if (visited.has(`${i},${j}`) || grid[i][j] === '0') return;

    visited.add(`${i},${j}`);
    dfs(grid, i + 1, j, visited);
    dfs(grid, i - 1, j, visited);
    dfs(grid, i, j + 1, visited);
    dfs(grid, i, j - 1, visited);
}
var numIslands = function (grid) {
    let visited = new Set();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
                count++;
                dfs(grid, i, j, visited);
            }
        }
    }

    return count;
};
let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]];

console.log(numIslands(grid))