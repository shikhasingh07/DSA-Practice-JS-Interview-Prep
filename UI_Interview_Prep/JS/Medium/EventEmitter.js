class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(listener);
    return this;
  }

  off(event, listener) {
    if (!this.events.has(event)) return this;
    const listeners = this.events.get(event);
    const idx = listeners.indexOf(listener);
    if (idx !== -1) listeners.splice(idx, 1);
    return this;
  }

  emit(event, ...args) {
    if (!this.events.has(event) || this.events.get(event).length === 0) return false;
    this.events.get(event).forEach((l) => l(...args));
    return true;
  }
}

const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);