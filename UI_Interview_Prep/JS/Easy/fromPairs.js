function fromPairs(pairs) {
  let obj = {};

  if (Array.isArray(pairs)) {
    for (let i = 0; i < pairs.length; i++) {
      for (let j = i; j < pairs.length; j++) {
        obj[pairs[j][0]] = pairs[j][1];
      }
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
