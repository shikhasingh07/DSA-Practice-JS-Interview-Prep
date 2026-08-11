var updateMatrix = function (mat) {
    let queue = [];
    let visit = new Set();
    let result = Array.from({ length: mat.length }, () =>
        new Array(mat[0].length).fill(Infinity),
    );

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                result[i][j] = 0;
            }
        }
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (queue.length > 0) {
        let size = queue.length;

        for (let k = 0; k < size; k++) {
            let [i, j] = queue.shift();
            for (let [dr, dc] of dirs) {
                let ni = i + dr,
                    nj = j + dc;
                if (ni < 0 || nj < 0 || ni >= mat.length || nj >= mat[0].length)
                    continue;
                if (result[ni][nj] === Infinity) {
                    result[ni][nj] = result[i][j] + 1
                    queue.push([ni, nj]);
                }
            }
        }
    }

    return result;
};

let mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
];
console.log(updateMatrix(mat));
