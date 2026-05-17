import { useState, useEffect } from "react";

function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1000,
  isIncrement = false,
}) {
  const [count, setCount] = useState(countStart);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => setCount((c) => isIncrement ? c + 1 : c - 1), intervalMs);
    return () => clearInterval(timer);
  }, [isRunning]);

  const reset = () => {
    setCount(countStart);
    setIsRunning(false);
  };
  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };

  return { reset, start, stop, count };
}
