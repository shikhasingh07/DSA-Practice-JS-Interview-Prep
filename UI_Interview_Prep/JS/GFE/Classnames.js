function classNames(...args) {
  let str = [];
  for (let ar of args) {
    if (!ar) continue;
    else if (typeof ar === "string" || typeof ar === "number") {
      str.push(ar);
    } else if (Array.isArray(ar)) {
      str.push(classNames(...ar));
    } else if (typeof ar === "object" && ar !== null) {
      for (let key in ar) {
        if (ar[key]) {
          str.push(key);
        }
      }
    }
  }
  return str.join(" ");
}

classNames("foo", "bar"); // 'foo bar'
classNames("foo", { bar: true }); // 'foo bar'
classNames({ "foo-bar": true }); // 'foo-bar'
classNames({ "foo-bar": false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// console.log(classNames(["foo", "bar", "baz"]));
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""));
