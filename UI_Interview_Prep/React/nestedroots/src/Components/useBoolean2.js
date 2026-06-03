import React, { useState , useCallback } from "react";

const useBoolean2 = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => {
    setValue(true);
  },[]);

  const setFalse = useCallback(() => {
    setValue(false);
  },[]);

  return { value, setTrue, setFalse };
};

export default useBoolean2;
