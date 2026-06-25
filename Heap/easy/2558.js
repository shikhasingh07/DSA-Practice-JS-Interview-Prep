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
var pickGifts = function (gifts, k) {
    let heap = new Maxheap();
    for (let key of gifts) {
        heap.insert(key);
    }

    for (let i = 0; i < k; i++) {
        // k times
        let max = heap.extractMin();
        heap.insert(Math.floor(Math.sqrt(max))); 
    }

    return heap.heap.reduce((sum, val) => sum + val, 0);
};

let gifts = [25, 64, 9, 4, 100],
    k = 4;
console.log(pickGifts(gifts, k));
