import { useState, useRef } from "react";

const useStateWithReset = (initialStateOrInitializer) => {
  const initialValue = useRef(
    typeof initialStateOrInitializer === "function"
      ? initialStateOrInitializer()
      : initialStateOrInitializer,
  );

  const [value, setValue] = useState(initialStateOrInitializer);

  const resetValue = () => setValue(initialValue.current);
  return [ value, setValue, resetValue ];
};

export default useStateWithReset;
