function curry (fn) { 
    return function ar(...arg){
        if(arg.length >= fn.length) return fn(...arg); 
        return (...arg2) => ar(...arg , ...arg2)
    }
}