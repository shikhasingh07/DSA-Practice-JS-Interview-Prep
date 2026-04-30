function getElementsByStyle(element, property, value) {
  let result = [];

  function traverse(element) {
    Array.from(element.children).forEach((item) => {
      const computed = window.getComputedStyle(item);
      if (computed.getPropertyValue(property) === value) {
        result.push(item);
      }
      traverse(item);
    });
  }
traverse(element);
  return result;
}

const doc = new DOMParser().parseFromString(
  `<div>
    <span style="font-size: 12px">Span</span>
    <p style="font-size: 12px">Paragraph</p>
    <blockquote style="font-size: 14px">Blockquote</blockquote>
  </div>`,
  "text/html",
);

console.log(getElementsByStyle(doc.body, "font-size", "12px"));
