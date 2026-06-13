import { useCallback, useState } from "react";

function useSet(initialSet) {
  const [set, setSet] = useState(initialSet);

  const add = useCallback(
    (item) => setSet((prev) => new Set([...Array.from(prev), item])),
    [],
  );

  const remove = useCallback(
    (item) =>
      setSet((prev) => new Set(Array.from(prev).filter((i) => i !== item))),
    [],
  );
  const toggle = useCallback(
    (item) =>
      setSet((prev) =>
        prev.has(item)
          ? new Set(Array.from(prev).filter((i) => i !== item))
          : new Set([...Array.from(prev), item]),
      ),
    [],
  );
  const reset = useCallback(() => setSet(initialSet), [initialSet]);
  const clear = useCallback(() => setSet(new Set()), []);

  return { set, add, remove, toggle, reset, clear };
}
