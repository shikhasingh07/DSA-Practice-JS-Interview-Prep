function intersectionBy(iteratee, ...arrays) {
  if (arrays.length == 0) {
    return [];
  }
  if (arrays.some((arr) => arr.length === 0)) {
    return [];
  }
  const [first, ...rest] = arrays;
  const restSets = rest.map((arr) => new Set(arr.map(iteratee)));

  const seen = new Set();
  return first.filter((item) => {
    const transformed = iteratee(item);
    if (seen.has(transformed)) return false;
    if (restSets.every((set) => set.has(transformed))) {
      seen.add(transformed);
      return true;
    }
    return false;
  });
}

const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ["apple", "banana", "ORANGE", "orange"],
  ["Apple", "Banana", "Orange"],
);

console.log(result2);
