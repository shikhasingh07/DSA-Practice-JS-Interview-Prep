import React, { useState } from "react";

const useObject = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const isPlainObject = (val) =>
    val !== null && typeof val === "object" && !Array.isArray(val);

  const setObject = (updater) => {
    setState((prev) => {
      const newVal = typeof updater === "function" ? updater(prev) : updater;
      if (!isPlainObject(newVal)) throw new Error("Invalid new state");
      return { ...prev, ...newVal };
    });
  };

  return [state, setObject];
};

export default useObject;
