var shortestPathBinaryMatrix = function (grid) {

    let queue = [];
    let visit = new Set();

    let n = grid.length;
    // edge case pehle:
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

    // sirf start push karo:
    queue.push([0, 0]);
    visit.add('0,0');
    let steps = 1;


    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

    while (queue.length > 0) {
        let size = queue.length;

        for (let k = 0; k < size; k++) {
            let [i, j] = queue.shift();

            if (i === n - 1 && j === n - 1) return steps;
            for (let [dr, dc] of dirs) {
                let ni = i + dr, nj = j + dc;
                if (ni < 0 || nj < 0 || ni >= grid.length || nj >= grid[0].length) continue;
                if (grid[ni][nj] !== 0 || visit.has(`${ni},${nj}`)) continue;
                visit.add(`${ni},${nj}`);
                queue.push([ni, nj]);
            }
         
        }
        steps++;
    }
    return -1;
};
let grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]];
console.log(shortestPathBinaryMatrix(grid))