export default function setCancellableTimeout(callback, delay, ...args) {
    const Intervals = setTimeout(callback, delay, ...args);
    return () => clearTimeout(Intervals);
}