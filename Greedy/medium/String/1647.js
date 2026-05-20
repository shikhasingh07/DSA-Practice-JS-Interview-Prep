var minDeletions = function (s) {
  let map = {};
  for (let item of s) {
    map[item] = (map[item] || 0) + 1;
  }

  let countSet = new Set(),
    count = 0;
  for (let item of Object.keys(map)) {
    while (map[item] && countSet.has(map[item])) {
      map[item]--;
      count++;
    }
    countSet.add(map[item]);
  }

  console.log(map, countSet,count);
  return count;
};

let s = "aaabbbcc";
console.log(minDeletions(s));
