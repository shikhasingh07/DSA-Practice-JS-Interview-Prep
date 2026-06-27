function unionBy(iteratee, ...arrays) {
  let result = [];
  let compare = [];

  arrays.forEach((item) => {
    item.forEach((arr) => {
      if (!compare.includes(iteratee(arr))) {
        result.push(arr);
        compare.push(iteratee(arr));
      }
    });
  });
  return result;
}

console.log(unionBy((value) => value, [2], [1, 2]));
