import { useState } from "react";

const useMap = (initialValue = new Map()) => {
  const [map, setMap] = useState(() => new Map(initialValue));

  const set = (key, value) => {
    setMap((prev) => new Map(prev).set(key, value));
  };
  const remove = (key) => {
    setMap((prev) => {
      const next = new Map(prev);
      next.delete(key);
      return next;
    });
  };
  const setAll = (entries) => setMap(new Map(entries));
  const reset = () => setMap(new Map());

  return { map, set, setAll, reset, remove };
};

export default useMap;
