var orangesRotting = function (grid) {

    let queue = [];
    let visit = new Set();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) count++;
            if (grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }

    console.log(queue)
    let minutes = 0;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length > 0) {
        let size = queue.length;
        let rotted = 0;

        for (let k = 0; k < size; k++) {

            let [i, j] = queue.shift();
            for (let [dr, dc] of dirs) {
                let ni = i + dr, nj = j + dc;
                if (ni < 0 || nj < 0 || ni >= grid.length || nj >= grid[0].length) continue;
                if (grid[ni][nj] !== 1) continue;
                grid[ni][nj] = 2;
                rotted++;
                count--;
                queue.push([ni, nj]);

            }

        }
        if (rotted > 0) minutes++;
    }
    return count === 0 ? minutes : -1;
};

let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
console.log(orangesRotting(grid))