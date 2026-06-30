function result(board, i, j, idx, word, visited) {
    if (idx === word.length) return true;

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[idx]) {
       return false;
    }

    visited[i][j] = true;

    const found = result(board, i + 1, j, idx + 1, word, visited) ||
        result(board, i - 1, j, idx + 1, word, visited) ||
        result(board, i, j + 1, idx + 1, word, visited) ||
        result(board, i, j - 1, idx + 1, word, visited);
    visited[i][j] = false; // backtrack!
    return found;


}

var exist = function (board, word) {
    let rows = board.length;
    let cols = board[0].length;

    const visited = Array.from({ length: rows }, () =>
        new Array(cols).fill(false)
    );

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0]) {
                if (result(board, i, j, 0, word, visited)) return true;
            }
        }
    }

    return false;
};

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    word = "ABCCED";
console.log(exist(board, word));