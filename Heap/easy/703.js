var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = nums.sort((a, b) => a - b).slice(-k);
};

KthLargest.prototype.add = function (val) {
  let i = this.heap.findIndex((n) => n > val);
  if (i === -1) this.heap.push(val);
  else this.heap.splice(i, 0, val);

  if(this.heap.length > this.k){
    this.heap.shift();  
  }

  return this.heap[0];
};

let kl = new KthLargest(3, [4, 5, 8, 2]);
console.log(kl.add(3));  // 4
console.log(kl.add(5));  // 5
console.log(kl.add(10)); // 5
console.log(kl.add(9));  // 8
console.log(kl.add(4));  // 8