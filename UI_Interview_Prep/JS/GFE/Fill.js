const fill = (array, value, start = 0, end = array.length) => {
    const len = array.length;

    if (!Array.isArray(array) || len === 0) return [];
  
    if (start < 0) {
      start = Math.max(len + start, 0);
    }
  
    if (end < 0) {
      end = Math.max(len + end, 0);
    } else if (end > len) {
      end = len;
    }
  
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
  
    return array;
};

console.log(fill([4, 6, 8, 10], "*", 1, 3));
