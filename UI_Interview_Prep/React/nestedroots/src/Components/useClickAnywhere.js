import React, { useEffect } from "react";

const useClickAnywhere = (handler) => {
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, [handler]);
};

export default useClickAnywhere;
