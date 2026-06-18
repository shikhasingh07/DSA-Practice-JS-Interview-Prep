import React, { useEffect, useRef } from "react";

const useKeyPress = (
  key,
  callback,
  { event = "keydown", target = window } = {
    event: "keydown",
    target: window,
  },
) => {
  const ref = useRef();
  ref.current = callback;

  useEffect(() => {
    const handler = (e) => {
      if (e.key !== key) {
        return;
      }
     ref.current(e);
    };
    target.addEventListener(event, handler);
    return () => {
      target.removeEventListener(event, handler);
    };
  }, []);
};

export default useKeyPress;
