var TimeMap = function () {
  this.store = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store[key]) this.store[key] = [];
  this.store[key].push([timestamp, value]);
};

TimeMap.prototype.get = function (key, timestamp) {
  let arr = this.store[key] || [];
  let hi = arr.length - 1;
  let lo = 0;
  let result = "";
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (arr[mid][0] <= timestamp) {
      result = arr[mid][1];
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
};
