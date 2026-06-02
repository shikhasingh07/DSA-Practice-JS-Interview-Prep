var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);

  let ans = [],
    result = 0;

  for (const spell of spells) {
    let lo = 0,
      hi = potions.length - 1;
    result = potions.length;
    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);

      if (spell * potions[mid] >= success) {
        result = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    ans.push(potions.length - result);
  }
  return ans;
};
let spells = [5, 1, 3],
  potions = [1, 2, 3, 4, 5],
  success = 7;
console.log(successfulPairs(spells, potions, success));
