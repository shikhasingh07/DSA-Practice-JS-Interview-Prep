function get(objectParam, pathParam, defaultValue) {
  if (objectParam === null) return defaultValue;

  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let result = objectParam;

  for (let key of path) {
    if (result != null && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result;
}

const user = {
  info: {
    address: {
      city: "Delhi",
    },
  },
};

console.log(get(user, "info.address.city", "Unknown"));
