class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  compare(a, b) {
    if (a.length !== b.length) return a.length - b.length;
    return a < b ? -1 : 1;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.compare(this.heap[parent], this.heap[idx]) <= 0) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  extactMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
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

      let small = idx;

      if (left < len && this.compare(this.heap[left], this.heap[small]) < 0)
        small = left;
      if (right < len && this.compare(this.heap[right], this.heap[small]) < 0)
        small = right;

      if (small === idx) break;
      [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
      idx = small;
    }
  }
}

var kthLargestNumber = function (nums, k) {
  let heap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);

    if (heap.heap.length > k) {
      heap.extactMin();
    }
  }

  return heap.heap[0];
};

let arr = ["3", "6", "7", "10"],
  k = 4;
console.log(kthLargestNumber(arr, k));
