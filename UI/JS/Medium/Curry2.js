function curry(fn) {
   return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function (...moreArgs) {
            return curried.apply(this, [...args, ...moreArgs]);
        }.bind(this);  // ← yahan hona chahiye!
    }
}
