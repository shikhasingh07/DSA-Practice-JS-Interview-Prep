/**
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(el, tagName) {
    const elements = [];
    const upperTagName = tagName.toUpperCase();

    function traverse(node) {
        if (node == null) {
            return;
        }

        if (node.tagName === upperTagName) {
            elements.push(node);
        }

        for (const child of node.children) {
            traverse(child);
        }
    }

    // Start from the root's children so the root element itself is never matched.
    for (const child of el.children) {
        traverse(child);
    }

    return elements;
}
