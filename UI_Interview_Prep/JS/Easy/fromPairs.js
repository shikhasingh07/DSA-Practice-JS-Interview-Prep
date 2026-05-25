function fromPairs(pairs) {
  let obj = {};

  if (Array.isArray(pairs)) {
    for (let i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1];
    }
  }

  return obj;
}

const pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
console.log(fromPairs(pairs));
