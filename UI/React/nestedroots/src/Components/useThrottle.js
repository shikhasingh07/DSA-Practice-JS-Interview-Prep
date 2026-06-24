import { useState, useRef, useEffect } from "react";

const useThrottle = (value, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const last = useRef(null);
  const lastPublishedAt = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const remaining = interval - (now - lastPublishedAt.current);

    if (remaining <= 0) {
      setThrottledValue(value);
      lastPublishedAt.current = now;
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastPublishedAt.current = Date.now();
      }, remaining);
      return () => clearTimeout(timer);
    }
  }, [value, interval]);

  return throttledValue;
};

export default useThrottle;
