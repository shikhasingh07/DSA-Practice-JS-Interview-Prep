function jsonStringify(value, seen = new Set()) {
  if (
    value === undefined ||
    typeof value === "function" ||
    typeof value === "symbol"
  ) {
    return undefined;
  }
  if (value instanceof Date) return `"${value.toISOString()}"`;

  if (value === null) return "null";
  if (typeof value === "boolean") return `${value}`;
  if (typeof value === "number") {
    if (!isFinite(value) || isNaN(value)) return "null";
    return `${value}`;
  }

  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) {
    const items = value.map((item) => jsonStringify(item, seen));
    return `[${items.join(",")}]`;
  }
  if (typeof value === "bigint") {
    throw new TypeError("Do not know how to serialize a BigInt");
  }
  if (typeof value === "object") {
    if (seen.has(value))
      throw new TypeError("Converting circular structure to JSON");
    seen.add(value);
    const items = Object.entries(value)
      .filter(
        ([k, v]) =>
          v !== undefined && typeof v !== "function" && typeof v !== "symbol",
      )
      .map(([k, v]) => `"${k}":${jsonStringify(v, seen)}`);

    return `{${items.join(",")}}`;
  }
}

console.log(jsonStringify('"foo"' === '"\\"foo\\""'));
