const Chunks = (array, size = 1) => {
  const arr = [];
  let len = 0;
  while (len < array.length) {
    let ans = [];
 
    for (let j = 0 ; j < size && len < array.length; j++) {
      ans.push(array[len]);
      len++;
    }
    arr.push(ans);
  }

  return arr;
};


console.log(Chunks(['a', 'b', 'c', 'd'],2))