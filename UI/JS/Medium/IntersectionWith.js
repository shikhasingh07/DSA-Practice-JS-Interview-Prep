function intersectionWith(comparator, ...arrays) {
  if (arrays.length === 0) return [];
    const [first, ...rest] = arrays;
  return first.filter(item =>
    rest.every(arr => arr.some(el => comparator(el ,item)))
  );
}

const arr1 = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
];
const arr2 = [
  { y: 2, x: 1 },
  { x: 3, y: 4 },
];

const result = intersectionWith(
  (a, b) => a.x === b.x && a.y === b.y,
  arr1,
  arr2,
); // => [{ x: 1, y: 2 }]

console.log(intersectionWith((a, b) => a === b, [1, 2, 3], [2, 3, 4], [3, 4, 5]))