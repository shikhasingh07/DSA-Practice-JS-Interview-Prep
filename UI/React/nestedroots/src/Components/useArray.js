import { useState } from "react";

const useArray = (arg) => {
  const [array, setArr] = useState(arg);

  const set = (ele) => setArr(ele);

  const push = (ele) => setArr((prev) => [...prev, ele]);

  const pop = () => setArr((prev) => prev.slice(0, -1));

  const remove = (index) =>
    setArr((prev) => prev.filter((_, i) => i !== index));

  const clear = () => setArr([]);

  const filter = (fn) => setArr((prev) => prev.filter(fn));

  const update = (index, newVal) =>
    setArr((prev) => prev.map((item, i) => (i === index ? newVal : item)));

  return { array, set, push, pop, remove, clear, filter, update };
};

export default useArray;
