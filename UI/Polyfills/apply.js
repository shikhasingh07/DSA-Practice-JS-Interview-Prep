Function.prototype.myApply = function (thisArg, argArray) {
   thisArg = thisArg || globalThis;

  let fn = Symbol("fn");
  thisArg[fn] = this;

  let result = Array.isArray(argArray)
    ? thisArg[fn](...argArray)
    : thisArg[fn]();

  return result;
};