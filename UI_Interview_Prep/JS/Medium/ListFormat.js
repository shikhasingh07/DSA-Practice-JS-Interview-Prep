function listFormat(items, options) {
  if (options?.sorted) items = [...items].sort();
  items = items.filter(Boolean);
  if (options?.unique) items = [...new Set(items)];
  if (items.length === 0) return "";

  if (items.length === 1) return items[0];

  if (items.length === 2) return items.join(" and ");

  if (options?.length > 0 && options.length < items.length) {
    const remaining = items.length - options.length;
    items = items.slice(0, options.length);
    items.push(`${remaining} ${remaining === 1 ? "other" : "others"}`);
  }
  let last = items[items.length - 1];
  const rest = items.slice(0, -1);

  return rest.join(", ") + " and " + last;
}
listFormat([]); // ''
listFormat(["Apple"]); // 'Apple'
listFormat(["Apple", "Banana"]); // 'Apple and Banana'
listFormat(["Apple", "Banana", "Cherry"]); // 'Apple, Banana, and Cherry'
console.log(listFormat(["Apple", "Banana", "Cherry"]));
