function canDo(dist, mid, hour) {
  let result = 0;
  for (let i = 0; i < dist.length; i++) {
    if (i === dist.length - 1) {
      result += dist[i] / mid
    } else {
      result += Math.ceil(dist[i] / mid);
    }
  }

  return result <= hour;
}
var minSpeedOnTime = function (dist, hour) {
  let lo = 1,
    hi = 1e7;

    if(hour <= dist.length - 1) return -1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canDo(dist, mid, hour)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
let dist = [1, 3, 2],
  hour = 6;
console.log(minSpeedOnTime(dist, hour));
