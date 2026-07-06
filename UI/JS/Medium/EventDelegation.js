function delegateEvent(container, eventName, selector, listener) {
  function delegatedListener(event) {
    if (!(event.target instanceof Element)) {
      return;
    }

    // closest() lets clicks on descendants match the intended ancestor.
    const matchedElement = event.target.closest(selector);

    if (
      matchedElement == null ||
      matchedElement === container ||
      !container.contains(matchedElement)
    ) {
      return;
    }

    listener(event, matchedElement);
  }

  container.addEventListener(eventName, delegatedListener);

  return function cleanup() {
    container.removeEventListener(eventName, delegatedListener);
  };
}
