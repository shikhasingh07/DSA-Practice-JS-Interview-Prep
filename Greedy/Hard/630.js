class maxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.heap[idx] > this.heap[parent]) {
      [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }

  bubbleDown() {
    let idx = 0;
    let len = this.size();

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;

      let largest = idx;

      if (left < len && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < len && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === idx) break;
      if (largest !== idx) {
        [this.heap[idx], this.heap[largest]] = [
          this.heap[largest],
          this.heap[idx],
        ];
        idx = largest;
      }
    }
  }
  remove() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
}
var scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);
  let time = 0;
  let heap = new maxHeap();

  for(let i = 0 ; i < courses.length ; i++){
    heap.insert(courses[i][0]);
    time += courses[i][0];

    if(time > courses[i][1]){
        time -= heap.remove()
    }
  }
  return heap.size();
};
let courses = [
  [100, 200],
  [200, 1300],
  [1000, 1250],
  [2000, 3200],
];
console.log(scheduleCourse(courses));
