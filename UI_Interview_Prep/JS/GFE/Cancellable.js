export default function setCancellableInterval(callback, delay, ...args) {
 const intervals = setTimeout(callback , delay , ...args); 

 return (() => clearInterval(intervals))
}
