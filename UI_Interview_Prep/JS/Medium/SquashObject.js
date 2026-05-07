function squashObject(obj, prefix = "", result = {}) {
  for (const key of Object.keys(obj)) {
    const newKey = [prefix, key].filter(Boolean).join(".");

    if (typeof obj[key] === "object" && obj[key] !== null) {
      squashObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

function unsquashObject(obj) {
  const result = {};

  for (const key of Object.keys(obj)) {
    const parts = key.split('.').filter(Boolean);
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (current[parts[i]] === undefined) {
         current[parts[i]] = isNaN(parts[i + 1]) ? {} : [];
      }
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = obj[key];
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

const object2 = {
  a: 5,
  b: 6,
  "c.f": 9,
  "c.g.m": 17,
  "c.g.n": 3,
};
console.log(unsquashObject(object2));
