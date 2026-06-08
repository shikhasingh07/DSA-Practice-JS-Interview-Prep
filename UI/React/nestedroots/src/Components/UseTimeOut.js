import { useRef, useEffect } from "react";

function useTimeout(callback, delay) {
  let ref = useRef();

  useEffect(() => {
    let timer = null;
    if (delay === null) return;
    timer = setTimeout(() => ref.current(), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);
}
