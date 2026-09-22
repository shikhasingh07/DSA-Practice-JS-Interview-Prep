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

// function canDo(piles, k, h) {
//     let hours = 0;
//     for (let pile of piles) {
//         hours += Math.ceil(pile/k);
//     }
//     return hours <= h;
// }

// var koko = function (piles, h) {

//     let lo = 1 , hi = Math.max(...piles); 

//     while(lo < hi){
//       let mid = Math.floor((lo + hi) / 2); 

//       if(canDo(piles,mid , h)){
//         hi = mid; 
//       }else{
//        lo = mid + 1; 
//       }

//     }

//     return lo;
// }

// let piles = [3,6,7,11], h = 8;
// console.log(koko(piles,h))


// var diameterOfBinaryTree = function (root) {

//     let length = 0;
//     function backtracking(root) {

//         if (root === null) {
//             return 0;
//         }

//         let left = backtracking(root.left);
//         let right = backtracking(root.right);

//         length = Math.max(length, left + right)
//         return 1 + Math.max(left, right)
//     }

//     backtracking(root);

//     return length;
// };
// let root = [1, 2, 3, 4, 5];
// console.log(diameterOfBinaryTree(root))

// var lengthOfLongestSubstring = function (s) {


//     // need to have temaplete where k window size is not provided 

//     let ans = 0, map = new Map(), max = 0;
//     for (let i = 0; i < s.length; i++) {

//         let ch = s[i];
//         if (map.has(ch)) {
//             max = Math.max(map.get(ch) + 1, max);
//         }

//         map.set(ch , i);

//         ans = Math.max(ans ,i - max + 1); 
//     }

//     return ans ;
// };
// let s = "bbbbb";
// console.log(lengthOfLongestSubstring(s))


// var coinchange = (coins , amount) => {

//     let dp = new Array(amount+1).fill(Infinity);
//     dp[0] = 0;
//     for(let i = 1 ; i <= amount; i++){
//      for(let coin of coins){
//         if( i >= coin){
//             dp[i] = Math.min(dp[i] , dp[i-coin] + 1);
//         }
//      }
//     }

//     return dp[amount] === Infinity ? -1 : dp[amount];
// }

// let coins = [1,5,11], amount = 11; 
// console.log(coinchange(coins,amount));
// const dfs = (grid, i, j, visit) => {
//     if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || visit.has(`${i},${j}`)) {
//         return;
//     }
//     if (grid[i][j] === '0') return;
//     visit.add(`${i},${j}`)
//     dfs(grid, i + 1, j, visit);
//     dfs(grid, i - 1, j, visit);
//     dfs(grid, i, j + 1, visit);
//     dfs(grid, i, j - 1, visit);
// }

// const Island = (Input) => {

//     let visit = new Set();

//     let count = 0;
//     for (let i = 0; i < Input.length; i++) {
//         for (let j = 0; j < Input[0].length; j++) {
//             if (!visit.has(`${i},${j}`) && Input[i][j] === '1') {
//                 count++;
//                 dfs(Input, i, j, visit)
//             }

//         }
//     }
//     return count;
// }

// let Input = [["1", "1", "1", "1", "0"],
// ["1", "1", "0", "1", "0"],
// ["1", "1", "0", "0", "0"],
// ["0", "0", "0", "0", "0"]];

// console.log(Island(Input))


// 22sep 
const group = (strs) => {

    let map = new Map();
    for (let str of strs) {
        let key = str.split("").sort().join('#');

        if (!map.has(key)) {
            map.set(key, [str])
        } else {
            map.get(key).push(str)
        }
    }
    return [...map.values()]
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(group(strs));