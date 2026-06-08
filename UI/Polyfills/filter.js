// Filters
Array.prototype.myFilter = function (callback) {
  let ans = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      ans.push(this[i]);
    }
  }
  return ans;
};

let arr = [3, 6, 9, 12, 15, 18];
let ans = arr.myFilter((arr, index, value) => value > 3);
