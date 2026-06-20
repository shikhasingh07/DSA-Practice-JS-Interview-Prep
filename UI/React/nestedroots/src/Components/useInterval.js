import React, { useEffect , useRef } from "react";

const useInterval = (callback, delay) => {
    const ref = useRef(callback); 

    useEffect(() => {
      ref.current = callback;
    },[callback])
  
    useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => {
        ref.current()
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
};

export default useInterval;
