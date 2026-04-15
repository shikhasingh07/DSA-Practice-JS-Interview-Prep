function intersection(...arrays) {
  if (arrays.length === 0) return [];

  return [...new Set(arrays[0])].filter((value) =>
    arrays.every((arr) => arr.includes(value))
  );
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

console.log(intersection(arr1, arr2, arr3));
