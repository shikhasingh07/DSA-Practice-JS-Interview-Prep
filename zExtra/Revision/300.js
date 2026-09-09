// function dfs(nums) {
//     const arr = new Array(nums.length).fill(1);
//     for (let i = 0; i < nums.length; i++) {      // outer loop
//         for (let j = 0; j < i; j++) {             // inner loop
//             if (nums[j] < nums[i]) {
//                 arr[i] = Math.max(arr[i], arr[j] + 1);
//             }
//         }
//     }

//     return Math.max(...arr);
// }

// var lengthOfLIS = function (nums) {
//     return dfs(nums);
// };
// let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log(lengthOfLIS(nums))


// var searchMatrix = function (matrix, target) {

//     let m = matrix.length, n = matrix[0].length;
//     let lo = 0, hi = m * n - 1;

//     while (lo <= hi) {

//         let mid = Math.floor((lo + hi) / 2);
//         let val = matrix[Math.floor(mid / n)][mid % n];
//         // main yahi yaad rakhna hai 
//         if (val === target) return true;
//         else if (val < target) lo = mid + 1;
//         else hi = mid - 1;

//     }
//     return false;

// };

// var maxSlidingWindow = function (nums, k) {

//     //make minheap to get largest value
//     const deque = [];
//     let ans = [];

//     for (let i = 0; i < nums.length; i++) {
//         while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i] ) {
//             deque.pop();
//         }

//         if (deque[0] <= i - k) {
//             deque.shift();
//         }

//         deque.push(i);
//         if (i >= k - 1) {
//             ans.push(nums[deque[0]]);
//         }
//     }
//     return ans;
// }

// let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
// console.log(maxSlidingWindow(nums, k))

// var search = function (nums, target) {

//     let low = 0, high = nums.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         }
//          if (nums[low] <= nums[mid]) {
//             if (nums[low] <= target && target < nums[mid]) {
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }

//         } else {
//             if (nums[mid] < target && target <= nums[high]) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }
//     }

//     return -1;
// };
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0))


// var findMin = function(nums) {

//     let lo = 0 , hi = nums.length-1;

//     while(lo < hi){
//         let mid = Math.floor((lo+hi)/2);

//         if(nums[mid] < nums[hi]){
//             hi = mid; 
//         }else {
//             lo = mid + 1;
//         }
//     }

//     return nums[lo];
// };
// let nums = [3,4,5,1,2];
// console.log(findMin(nums))

function canDo(piles, k, h) {
    let hours = 0;
    for (let pile of piles) {
        hours += Math.ceil(pile/k);
    }
    return hours <= h;
}

var koko = function (piles, h) {

    let lo = 1 , hi = Math.max(...piles); 

    while(lo < hi){
      let mid = Math.floor((lo + hi) / 2); 

      if(canDo(piles,mid , h)){
        hi = mid; 
      }else{
       lo = mid + 1; 
      }
      
    }

    return lo;
}

let piles = [3,6,7,11], h = 8;
console.log(koko(piles,h))