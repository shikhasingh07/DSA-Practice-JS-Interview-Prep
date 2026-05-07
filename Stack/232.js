var MyQueue = function () {
  this.inbox = [];
  this.outbox = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inbox.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outbox.length === 0) {
    // inbox se outbox mein transfer karo
    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
   if (this.outbox.length === 0) {
    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox[this.outbox.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
   return this.inbox.length === 0 && this.outbox.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
