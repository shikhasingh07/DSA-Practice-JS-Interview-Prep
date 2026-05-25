function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  const length = array && array.length;

  if (fromIndex < 0) {
    fromIndex = Math.max(length + fromIndex, 0);
  }

  if (fromIndex >= length) {
    fromIndex = length - 1;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
