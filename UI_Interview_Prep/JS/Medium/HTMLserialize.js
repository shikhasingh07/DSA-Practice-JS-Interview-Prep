function serializeHTML(root, depth = 0) {
  let indent = "\t".repeat(depth);
  let { tag, children } = root;

  if (children.length === 0) {
    return `${indent}<${tag}></${tag}>`;
  }

  if (typeof children[0] === "string") {
    const textIndent = "\t".repeat(depth + 1);
    const inner = children.map((text) => `${textIndent}${text}`).join("\n");
    return `${indent}<${tag}>\n${inner}\n${indent}</${tag}>`;
  }

  const inner = children
    .map((child) => serializeHTML(child, depth + 1))
    .join("\n");
  return `${indent}<${tag}>\n${inner}\n${indent}</${tag}>`;
}

const tree = {
  tag: "body",
  children: [
    { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
    { tag: "div", children: ["baz"] },
  ],
};
console.log(serializeHTML(tree));
