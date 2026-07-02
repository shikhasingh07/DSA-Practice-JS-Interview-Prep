function buildBoard(path, n) {
  return path.map(col => ".".repeat(col) + "Q" + ".".repeat(n - col - 1));
}

function backtracking(n, row, ans, current, visited, dragOne, dragTwo) {
  if (row === n) {
    ans.push(buildBoard(current, n));
    return;
  }

  for (let col = 0; col < n; col++) {
    // 
    const d1 = row - col + (n - 1); 
    const d2 = row + col;
    if (visited[col]) continue;

    if (dragOne[d1]) continue;

    if (dragTwo[d2]) continue;

    visited[col] = true;
    dragOne[d1] = true;
    dragTwo[d2] = true;
    current.push(col);
    backtracking(n, row + 1, ans, current, visited, dragOne, dragTwo);
    current.pop();
    visited[col] = false;
    dragOne[d1] = false;
    dragTwo[d2] = false;
  }
}

var solveNQueens = function (n) {
  const colVisit = new Array(n).fill(false);
  const dragOne = new Array(2 * n - 1).fill(false);
  const dragTwo = new Array(2 * n - 1).fill(false);
  var ans = [];
  backtracking(n, 0, ans, [], colVisit, dragOne, dragTwo);

  return ans;
};
