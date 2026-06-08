import React, { useState } from "react";

const useDefault = (value, defaultValue) => {
  const [val, setValue] = useState(value);
  return [val ?? defaultValue, setValue];
};

export default useDefault;
