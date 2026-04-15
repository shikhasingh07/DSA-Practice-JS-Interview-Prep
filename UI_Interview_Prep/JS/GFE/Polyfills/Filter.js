// Filters
// Array.prototype.myFilter = function (callback){
//   let ans = [];

//   for(let i = 0 ; i < this.length ; i++){
//     if(callback(this , i , this[i])){
//         ans.push(this[i]);
//     }
//   }
//   return ans ;
// }

// let arr = [3,6,9,12,15,18];
// let ans = arr.myFilter((arr,index,value) => value > 3);

//  Promise all
// Array.prototype.promiseAll =  function () {
//     return new Promise((resolve, reject) => {
//         const result = [];
//         let resolvedCount = 0;

//         if (this.length === 0) {
//           resolve(result); // Resolve immediately if the iterable is empty
//         }

//         this.forEach((item, index) => {
//           Promise.resolve(item)
//             .then((res) => {
//               result[index] = res; // Store the resolved value at the correct index
//               resolvedCount++; // Increment the resolved count

//               if (resolvedCount === this.length) {
//                 resolve(result); // Resolve when all promises are resolved
//               }
//             })
//             .catch((error) => {
//               reject(error); // Reject immediately if any promise fails
//             });
//         });
//       });
// }

// const promise = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
// ]

// promise.promiseAll().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

//debounce
// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// Flatten
// function Flatten (arg){
//     let ans = []
//     for(let item of arg){
//         if(Array.isArray(item)){
//            ans.push(...Flatten(item))
//         }else{
//             ans.push(item)
//         }
//     }
//     return ans; 
// };

//curry 
// function curry (fn) {
//     return function curry(...arg){
//       if(arg.length >= fn.length){ 
//         return fn(...arg)
//       }else {
//         return function (...next){
//             return curry(...arg , ...next);
//         }
//       }
//     }
// }

// function multiple (a , b , c) {
//     return a * b * c; 
// }

// let ans = curry(multiple); 
// console.log(ans((2),(5),(4)));


// import { useState, useCallback } from "react";
// export default function useBoolean(initialValue = false) {
//   const [value, setValue] = useState(initialValue);
//   const setTrue = useCallback(() => setValue(true), []);
//   const setFalse = useCallback(() => setValue(false), []);
//   return { value, setTrue, setFalse };
// }


// import { useState, useCallback } from "react";

// export default function useCycle(...args) {
//   const [index, setIndex] = useState(0);

//   const cycle = useCallback(() => {
//     setIndex((index) => (index + 1) % args.length);
//   }, []);

//   return [args[index], cycle] as const;
// }
