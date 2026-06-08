function findIndex(array, predicate, fromIndex = 0) {
  
   const length = array && array.length;

   if (fromIndex < 0) {
      fromIndex = Math.max(length + fromIndex, 0);
   }

   if (fromIndex >= length) {
      return -1; 
   }

   for(let i = fromIndex ; i < array.length ; i++){
      if(predicate(array[i], i, array)){
         return i; 
      }
   }
   return -1;
}

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
console.log(findIndex(arr, (num) => num > 3));