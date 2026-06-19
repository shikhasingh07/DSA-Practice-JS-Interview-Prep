class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.addToFront = function(node) {
   node.prev = this.head;
   node.next = this.head.next;
   this.head.next.prev = node;
   this.head.next = node;
};

LRUCache.prototype.remove = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this.remove(node);
    this.addToFront(node);
    return node.val;
};

LRUCache.prototype.put = function(key, value) {
   if (this.map.has(key)) {
      let val = this.map.get(key);
      val.val = value;
      this.remove(val);
      this.addToFront(val);
      return;
    }

    let newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.addToFront(newNode);

    if (this.map.size > this.capacity) {
        let lru = this.tail.prev;
        this.remove(lru);
        this.map.delete(lru.key);
    }
};

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1));    // 1
lRUCache.put(3, 3);
console.log(lRUCache.get(2));    // -1
lRUCache.put(4, 4);
console.log(lRUCache.get(1));    // -1
console.log(lRUCache.get(3));    // 3
console.log(lRUCache.get(4));    // 4