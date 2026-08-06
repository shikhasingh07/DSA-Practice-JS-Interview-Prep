function dfs(board, i, j, visit) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
    if (board[i][j] !== 'O') return;
    board[i][j] = 'S';
    dfs(board, i + 1, j, visit); dfs(board, i - 1, j, visit);
    dfs(board, i, j + 1, visit); dfs(board, i, j - 1, visit);
}
var solve = function (board) {
    let row = board.length,
        col = board[0].length;
    let visit = new Set();
    for (let j = 0; j < col; j++) dfs(board, 0, j, visit);       // top
    for (let j = 0; j < col; j++) dfs(board, row - 1, j, visit);   // bottom
    for (let i = 0; i < row; i++) dfs(board, i, 0, visit);       // left
    for (let i = 0; i < row; i++) dfs(board, i, col - 1, visit);   // right

    console.log(board);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'S') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }

    return board;
};
let board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];
console.log(solve(board));
