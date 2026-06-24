var lastStoneWeight = function (stones) {
  let heap = stones.sort((a, b) => a - b);

  while (heap.length > 1) {
    let larOne = heap.pop();
    let larTwo = heap.pop();

    let result = larOne - larTwo;

    if (result > 0) {
      let i = heap.findIndex((n) => n > result);
      if (i === -1) heap.push(result);
      else heap.splice(i, 0, result);
    }
  }
  return heap[0] || 0;
};
let stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones));
