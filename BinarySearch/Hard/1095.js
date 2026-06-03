var findInMountainArray = function (target, mountainArr) {
  let lo = 0,
    hi = mountainArr.length() - 1;
  let n = mountainArr.length();

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  let peak = lo;
  ((lo = 0), (hi = peak));
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let val = mountainArr.get(mid);

    if (val === target) {
      return mid;
      hi = mid - 1;
    } else if (val < target) lo = mid + 1;
    else {
      hi = mid - 1;
    }
  }

  ((lo = peak), (hi = n - 1));
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let val = mountainArr.get(mid);
    if (val === target) {
      return mid;
      lo = mid + 1;
    } else if (val < target) hi = mid - 1;
    else {
      lo = mid + 1;
    }
  }

  return -1;
};

let mountainArr = [1, 2, 3, 4, 5, 3, 1],
  target = 3;
console.log(findInMountainArray(target, mountainArr));
