function squashObject(obj, prefix = "", result = {}) {
  for (const key of Object.keys(obj)) {
   const newKey = [prefix, key].filter(Boolean).join('.');

    if (typeof obj[key] === "object" && obj[key] !== null) {
      squashObject(obj[key],newKey,result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

console.log(squashObject(object));
