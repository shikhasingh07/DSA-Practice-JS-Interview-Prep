const dropRightWhile = (array, predicate) => {
  let index = array.length - 1;

  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }

  return array.slice(0, index + 1);
};

console.log(
  dropRightWhile([1, 2, 3, 4, 5], (value, _index, _array) => value > 3)
);
