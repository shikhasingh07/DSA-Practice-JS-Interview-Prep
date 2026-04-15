Array.prototype.square = function (arg) {
 const arr = this; 
 return arr.map(item => item * item)
};

[-2].square()