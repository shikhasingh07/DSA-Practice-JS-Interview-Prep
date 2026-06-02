var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let lo = 0,
    hi = m * n - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;

    if(matrix[row][col] === target){
      return true;
    }else if (matrix[row][col] > target){
      hi = mid - 1;
    }else{
      lo = mid + 1;
    }
  }
  return false;
};
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target));
