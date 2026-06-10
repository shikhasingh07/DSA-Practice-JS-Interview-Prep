import { useEffect } from "react";
function useClickOutside(
  ref,
  handler,
  eventType = "mousedown",
  eventListenerOptions = {},
) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener(eventType, handleClick, eventListenerOptions);
    return () =>
      document.removeEventListener(
        eventType,
        handleClick,
        eventListenerOptions,
      );
  }, [ref, handler, eventType, eventListenerOptions]);
}
