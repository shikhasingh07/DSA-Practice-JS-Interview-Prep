function isPlainObject(v) {
  return v !== null && !Array.isArray(v) && Object.getPrototypeOf(v) === Object.prototype;
}
function promiseMerge(p1, p2) {
  return Promise.all([p1, p2]).then(([v1, v2]) => {
    if (typeof v1 === "number" && typeof v2 === "number") {
      return v1 + v2;
    } else if (typeof v1 === "string" && typeof v2 === "string") {
      return v1 + v2;
    } else if (Array.isArray(v1) && Array.isArray(v2)) {
      return [...v1, ...v2];
    } else if (isPlainObject(v1) && isPlainObject(v2)) {
      return { ...v1, ...v2 };
    } else {
      throw "Unsupported data types";
    }
  });
}
async function test() {
  console.log(await promiseMerge(Promise.resolve(1), Promise.resolve(2)));
  console.log(await promiseMerge(Promise.resolve(1), Promise.resolve([])));
}
test();
