class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent][2] >= this.heap[idx][2]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    let min = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    let len = this.heap.length;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;

      let largest = idx;

      if (left < len && this.heap[left][2] > this.heap[largest][2])
        largest = left;
      if (right < len && this.heap[right][2] > this.heap[largest][2])
        largest = right;

      if (largest === idx) break;
      [this.heap[largest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[largest],
      ];
      idx = largest;
    }
  }
}

var kClosest = function (points, k) {
  let heap = new MaxHeap();
  for (let [x, y] of points) {
    heap.insert([x, y, x * x + y * y]);

    if(heap.heap.length > k){
        heap.extractMin(); 
    }
  }

  return heap.heap.map(p => [p[0], p[1]]);
};
