function dfs(grid, i, j, visit) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;

    if (visit.has(`${i},${j}`)) return;
    visit.add(`${i},${j}`);
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let [dr, dc] of dirs) {
        let ni = i + dr, nj = j + dc;
        if (ni >= 0 && nj >= 0 && ni < grid.length && nj < grid[0].length
            && !visit.has(`${ni},${nj}`)
            && grid[ni][nj] >= grid[i][j]) {
            dfs(grid, ni, nj, visit);
        }
    }
}

var pacificAtlantic = function (heights) {
    let pacific = new Set();
    let atlantic = new Set();

    let rows = heights.length,
        cols = heights[0].length;

    // top
    for (let i = 0; i < cols; i++) {
        dfs(heights, 0, i, pacific);
    }

    // left
    for (let i = 0; i < rows; i++) {
        dfs(heights, i, 0, pacific);
    }

    // bottom
    for (let j = 0; j < cols; j++) dfs(heights, rows - 1, j, atlantic);
    for (let i = 0; i < rows; i++) dfs(heights, i, cols - 1, atlantic);

    let result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific.has(`${i},${j}`) && atlantic.has(`${i},${j}`)) {
                result.push([i, j]);
            }
        }
    }
    return result;
};
let heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];
console.log(pacificAtlantic(heights));
