var totalFruit = function (fruits) {
  let result = 0;
  let map = new Map();
  let left = 0;
  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) map.delete(fruits[left]);
      left++;
    }

    result = Math.max(right - left + 1 , result);
  }

  return result;
};
let fruits = [1, 2, 3, 2, 2];
console.log(totalFruit(fruits));
