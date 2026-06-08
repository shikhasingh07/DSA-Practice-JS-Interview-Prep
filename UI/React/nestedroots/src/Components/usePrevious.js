import { useRef } from 'react';

const usePrevious = (state) => {
 const current = useRef(state);
  const previous = useRef();
  // Refs let the hook remember the last distinct value without triggering an extra render.
  if (current.current !== state) {
    previous.current = current.current;
    current.current = state;
  }
  return previous.current;
}

export default usePrevious