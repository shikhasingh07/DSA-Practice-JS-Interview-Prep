function canDo(bloomDay, mid, m, k) {
  let bouquets = 0,
    consecutive = 0;
  for (const flo of bloomDay) {
    if (flo <= mid) {
      consecutive++;
      if (consecutive === k) {
        bouquets++;
        consecutive = 0;
      }
    } else {
      consecutive = 0;
    }
  }

  return bouquets >= m;
}

var minDays = function (bloomDay, m, k) {
  let lo = 1,
    hi = Math.max(...bloomDay);
  if (m * k > bloomDay.length) return -1;

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canDo(bloomDay, mid, m, k)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
let bloomDay = [1, 10, 3, 10, 2],
  m = 3,
  k = 2;
console.log(minDays(bloomDay, m, k));
