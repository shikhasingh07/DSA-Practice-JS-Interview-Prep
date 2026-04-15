Function.prototype.myCall = function (thisArg, ...argArray) {
    if (typeof this !== "function") {
      throw new TypeError("'myCall must be called on a function");
    }
    thisArg = thisArg ?? this; 
  
    thisArg.fn = this;
    const res = thisArg.fn(...argArray);
  
    return res; 
  };
  