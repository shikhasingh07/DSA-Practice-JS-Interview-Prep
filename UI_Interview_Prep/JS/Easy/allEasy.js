function functionLength(fn) {
  return fn.length;
}

function makeCounter(initialValue = 0) {
    let count = initialValue;
    return () => count ++;
}


function mean(array) {
 let avg = array.reduce((prev , item) => prev + item,0)/array.length; 
 return avg;
}