var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  let end = -Infinity,
    count = 0;
  for (let i = 0; i < intervals.length; i++) {
    console.log(intervals[i][0], intervals[i][1]);
    if (intervals[i][0] < end) {
      count++;
    } else end = intervals[i][1];
  }

  return count;
};
let intervals = [[-50000,1]];
console.log(eraseOverlapIntervals(intervals));
