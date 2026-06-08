Function.prototype.myBind = function (thisArg, ...argArray) {
  const og = this;
  return (...arg) => {
    return og.apply(thisArg, [...argArray, ...arg]);
  };
};

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};
john.getAge.myBind(john);
console.log(john.getAge());

