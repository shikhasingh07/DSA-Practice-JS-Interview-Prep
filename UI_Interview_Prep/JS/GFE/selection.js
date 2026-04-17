function selectionSort(arr) {
  if (arr.length <= 0) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    // Finding minimum value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let tem = arr[min];
    arr[min] = arr[i];
    arr[i] = tem;
  }
  return arr;
}

console.log(selectionSort([9, 3, 6, 2, 1, 11]));