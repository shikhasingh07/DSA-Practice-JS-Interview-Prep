function setCancellableInterval(callback, delay, ...args) {
  let id = setInterval(() => {
    callback(...args);
  }, delay);

  return () => clearInterval(id);
}

let i = 0;
const cancel = setCancellableInterval(() => {
  i++;
}, 10);
cancel();
console.log(cancel());
