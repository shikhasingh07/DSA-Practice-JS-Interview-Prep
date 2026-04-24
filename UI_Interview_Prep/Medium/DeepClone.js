function deepClone(value) {
    if(Array.isArray(value)){
        return value.map(item => deepClone(item));
    }
    if(typeof value === "object" && value !== null){
       const result = {};
        Object.keys(value).forEach(key => result[key] = deepClone(value[key]))
        return result;
    }

    return value;
}

const obj1 = { user: { role: "admin" } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = "guest"; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.

const obj2 = { foo: [{ bar: "baz" }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = "bax"; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz'.

console.log(deepClone(clonedObj1, clonedObj2, obj2, obj1));
