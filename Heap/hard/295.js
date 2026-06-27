// 🧠 Title: "Two Heaps, One Truth — Finding the Median in a Stream Like a Pro"

// Intuition
// Stream mein median nikalna — sort nahi kar sakte har baar.
// Trick: array ko do halves mein baanto — left half maxHeap mein, right half minHeap mein.
// Median hamesha dono tops ke beech mein hota hai!

// Approach
// 1. MaxHeap (left) — chhote numbers store karta hai, top = largest of left half
// 2. MinHeap (right) — bade numbers store karta hai, top = smallest of right half
// 3. addNum: correct heap mein insert karo, phir balance karo (size diff > 1 nahi hona chahiye)
// 4. findMedian: equal size → (maxTop + minTop) / 2, warna bade heap ka top

// Time Complexity: O(log n) per addNum (heap insert/extract), O(1) findMedian
// Space Complexity: O(n)

class Maxheap {
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
            if (this.heap[parent] >= this.heap[idx]) break;
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
            let large = idx;

            if (left < len && this.heap[left] > this.heap[large]) {
                large = left;
            }

            if (right < len && this.heap[right] > this.heap[large]) {
                large = right;
            }

            if (large === idx) break;
            [this.heap[large], this.heap[idx]] = [this.heap[idx], this.heap[large]];
            idx = large;
        }
    }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return min;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  bubbleDown() {
    let idx = 0;
    let len = this.heap.length;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;

      let smallest = idx;

      if (left < len && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < len && this.heap[right] < this.heap[smallest])
        smallest = right;

      if (smallest === idx) break;
      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];
      idx = smallest;
    }
  }
}

class MedianFinder {
  constructor() {
    this.max = new Maxheap();
    this.min = new MinHeap();
  }

  balance(val1, val2) {
    return Math.abs(val1 - val2);
  }

  addNum(num) {
    if (this.max.heap[0] >= num) {
      this.max.insert(num);

      if (this.balance(this.max.heap.length, this.min.heap.length) > 1) {
        let top = this.max.extractMin(); // max se top hatao
        this.min.insert(top); // min mein daalo
      }
    } else {
      this.min.insert(num);

      if (this.balance(this.max.heap.length, this.min.heap.length) > 1) {
        let top = this.min.extractMin(); // min se top hatao
        this.max.insert(top); // max mein daalo
      }
    }
  }

  findMedian() {
    if(this.max.heap.length === this.min.heap.length){
        let result = (this.max.heap[0] + this.min.heap[0]) / 2; 
        return result;
    }else {
        return this.min.heap.length > this.max.heap.length ? this.min.heap[0] : this.max.heap[0];
    }
  }
}

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2
