function deepEqual(valueA, valueB) {
  if (valueA === null || valueB === null) return valueA === valueB;
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    for (let i = 0; i < valueA.length; i++) {
      if (!deepEqual(valueA[i], valueB[i])) return false;
    }
    return true;
  } else if (typeof valueA === "object" && !Array.isArray(valueB) ){
    let keys = Object.keys(valueA);
    if (keys.length !== Object.keys(valueB).length) return false;
    for (let i = 0; i < keys.length; i++) {
      if (!deepEqual(valueA[keys[i]], valueB[keys[i]])) return false;
    }
    return true;
  } else {
    return valueA === valueB;
  }
}

deepEqual("foo", "foo"); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: "1" }], [{ id: "2" }]); // false
// if(typeof valueA === "number" || typeof valueA === "string" || typeof valueA === "boolean"){

// }
