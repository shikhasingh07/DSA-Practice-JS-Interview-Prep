import React , {useEffect , useRef} from 'react'

const useEventListener = (eventName, handler, element, options) => {
  const latestHandler = useRef(handler);
  latestHandler.current = handler;

  useEffect(() => {
  const targetElement = element?.current ?? window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }
    const listener = (event) => {
      latestHandler.current(event);
    };
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export default useEventListener