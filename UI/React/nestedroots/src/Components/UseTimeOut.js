import { useRef, useEffect } from "react";

const useTimeout = (callback, time) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    const timeId = setTimeout(() => ref.current(), time);
    return () => clearTimeout(timeId);
  }, [time]);
};

export default useTimeout;
