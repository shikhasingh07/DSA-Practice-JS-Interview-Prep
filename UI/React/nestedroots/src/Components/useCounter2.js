import { useState, useCallback } from "react";

const useCounter2 = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);
  const reset = useCallback(() => setCount(initialValue),[initialValue]);

  return { count, increment, decrement, reset, setCount };
};

export default useCounter2;
