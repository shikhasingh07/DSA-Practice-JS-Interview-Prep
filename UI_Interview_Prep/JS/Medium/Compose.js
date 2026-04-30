function compose(...fns) {
  return (x) => {
    let result = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3));
