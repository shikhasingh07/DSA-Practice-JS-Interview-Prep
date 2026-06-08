function deepOmit(val, keys) {
  if (val === null || typeof val !== "object") return val;  
  if (Array.isArray(val)) {
    return val.map((item) => deepOmit(item, keys));
  } else if (typeof val === "object") {
    const result = {};
    for (const key of Object.keys(val)) {
      if (!keys.includes(key)) {
        // skip omitted keys
        result[key] = deepOmit(val[key], keys); // recurse on value
      }
    }
    return result;
  } else {
    return val;
  }
}

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};
console.log(deepOmit(obj, ["b", "c", "e"]));
