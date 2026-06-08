function countBy(array, iteratee) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[iteratee(array[i])] = (obj[iteratee(array[i])] || 0) + 1;
  }
  return obj;
}

function groupBy(array, iteratee) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    const key = iteratee(array[i]);
    obj[key] = obj[key] || [];
    obj[key].push(array[i]);
  }
  return obj;
}

console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
