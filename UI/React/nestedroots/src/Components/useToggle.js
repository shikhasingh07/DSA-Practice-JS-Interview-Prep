import React, { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [enabled, setEnabled] = useState(Boolean(defaultValue));

  const toggle = () => {
    setEnabled((prev) => !prev);
  };

  return [ enabled, toggle, setEnabled ];
};

export default useToggle;
