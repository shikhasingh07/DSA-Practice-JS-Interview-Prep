function curry (fn) { 
    return function ar(...arg){
        if(arg.length >= fn.length) return fn.call(this,...arg); 
        return (...arg2) => ar.call(this,...arg , ...arg2);
    }
}
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
curriedAdd(3)(4); // 7

const alreadyAddedThree = curriedAdd(3);
alreadyAddedThree(4); // 7


