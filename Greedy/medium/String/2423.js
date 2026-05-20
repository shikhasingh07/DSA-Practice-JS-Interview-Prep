var equalFrequency = function (word) {
  let map = {};

  for (let item of word) {
    map[item] = (map[item] || 0) + 1;
  }

  for (let item of Object.keys(map)) {
    if (map[item]) {
      map[item]--;
      const vals = Object.values(map).filter((v) => v > 0); // 0 wale ignore karo
      const allSame = vals.every((v) => v === vals[0]);
      if (allSame) return true;
       map[item]++;
    }
  }
  
  return false;
};
let word = "abcc";
console.log(equalFrequency(word));
