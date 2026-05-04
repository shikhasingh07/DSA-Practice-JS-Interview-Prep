// function curry = (fn) => {
//     let len = fn.length;
//     const curried = (...arg) => {
//        if(arg.length >= len) return fn(...arg);
//        return (...newArg) => curried(...arg , ...newArg);
//     }
//    return curried;
// }

// function atmost(nums,k){
//   let map = {0: 1};
//   let sum = 0 , count = 0;
//   for(let right = 0 ;  right < nums.length ; right ++){
//      sum += nums[right];
//     if(map[sum-k] !== undefined){
//         count += map[sum-k];
//     }
//     map[sum] = (map[sum] || 0) + 1
//   }
// return count;
// }

// const SubarraySum = () => {
//    return atmost(nums,k);
// }
// let nums = [1, 1, 1], k = 2;

// const anagram = (grp) => {
//   let result = [],
//     map = {};
//   for (let item of grp) {
//     const key = item.split("").sort().join("#");
//     if (!map[key]) map[key] = [];
//     map[key].push(item);
//   }
//   return Object.values(map);
// };

// const longestCharacter = (ans) => {
//     let left = 0 , map = {} , total= 0;
//     for(let i = 0 ; i < ans.length ; i++){
//       let ch = ans[i];
//       if(map[ch] !== undefined){
//         left = Math.max(map[ch] + 1 , left);
//       }
//       map[ch] = i;
//       total = Math.max(total , i - left + 1);
//     }
//     return total
// }

// const tapping = (arr) => {
//   let n = arr.length;
//   const leftMax = new Array(n);
//   const rightMax = new Array(n);
//   leftMax[0] = arr[0];
//   rightMax[n - 1] = arr[n - 1];
//   for (let i = 1; i < arr.length - 1; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
//   }

//   for (let j = arr.length - 1; j >= 0; j--) {
//     rightMax[j] = Math.max(rightMax[j + 1], arr[j]);
//   }

//   let max = 0; 
//   for(let i = 0; i < n; i++){
//     max += Math.min(leftMax[i] , rightMax[i]) - arr[i];
//   }

//   return max;
// };
// let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(tapping(arr));
