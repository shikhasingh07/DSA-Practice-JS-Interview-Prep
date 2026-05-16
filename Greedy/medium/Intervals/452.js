var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  // sorting
  // have end and count = 1
  // loop
  // if last end is greater than next start
  // then count
  // providing end value
  // return count

 let end = points[0][1], count = 1;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > end) {
      count++;
      end = points[i][1];
    }
  }
  return count;
};
let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
console.log(findMinArrowShots(points));
