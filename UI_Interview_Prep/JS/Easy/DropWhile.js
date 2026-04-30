const dropWhile = (array, prec) => {
  let len = 0;

  while (len < array.length && prec(array[len], len, array)) {
    len++;
  }

  return array.slice(len);
};

console.log(dropWhile([1, 2, 3, 4, 5], (value, _index, _array) => value < 3));
