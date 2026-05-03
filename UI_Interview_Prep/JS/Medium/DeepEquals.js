function deepEqual(valueA, valueB) {
 
}

deepEqual("foo", "foo"); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: "1" }], [{ id: "2" }]); // false
