function jsonStringify(value) {
    if (value === null) return "null";
    if (typeof value === "boolean") return `${value}`;
    if (typeof value === "number") return `${value}`;
    if (typeof value === "string") return `"${value}"`;
    if (Array.isArray(value)) {
        const items = value.map((item) => jsonStringify(item));
        return `[${items.join(",")}]`;
    }
    if (typeof value === "object") {
        const items = Object.entries(value).map(
            ([k, v]) => `"${k}":${jsonStringify(v)}`,
        );

        return `{${items.join(",")}}`;
    }
}

console.log(jsonStringify({ foo: "bar" }));              // '{"foo":"bar"}'
console.log(jsonStringify({ foo: "bar", bar: [1, 2, 3] })); // '{"foo":"bar","bar":[1,2,3]}'
console.log(jsonStringify({ foo: true, bar: false }));   // '{"foo":true,"bar":false}'
