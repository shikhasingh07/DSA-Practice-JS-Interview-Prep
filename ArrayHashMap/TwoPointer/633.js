// const squars = (c) =>{

//     let left = 0 ;
//     let right = Math.floor(Math.sqrt(c));

//     while (left <= right){
//         let sum = Math.pow(left, 2) + Math.pow(right, 2);
//         if(sum === c){
//             return true;
//         }
//         else if(sum > c){
//             right --;
//         }else {
//             left ++ ;
//         }

//     }
//     return false;
// }

// console.log(squars(5))

// how to find all the pairs in array
// const paris = function (nums, len, start, ans) {
//   if (start >= len - 1) {
//     return ans;
//   }

//   for (let i = start + 1; i < len; i++) {
//     ans.push([nums[start], nums[i]]);
//   }

//   return paris(nums, len, start + 1, ans);
// };

// var smallestDistancePair = function (nums, k) {
//   let ans = [];
//   let pairs = paris(nums, nums.length, 0, ans);

//   let grp = [];
//   for (let i = 0; i < pairs.length; i++) {
//     let cal = Math.abs(pairs[i][0] - pairs[i][1]);
//     grp.push(cal);
//   }

//   grp.sort((a,b) => a-b);

//   return grp[k-1];
// };

// console.log(smallestDistancePair([1, 3, 1], 1));

// function smallestDistancePair(nums, k) {
//   // Sort so differences increase as indices get farther apart
//   nums.sort((a, b) => a - b);

//   // The answer (a distance) is between 0 and max(nums) - min(nums)
//   let left = 0;
//   let right = nums[nums.length - 1] - nums[0];

//   // Count how many pairs (i, j), i < j, have distance <= maxDist
//   function countPairs(maxDist) {
//     let count = 0; // total qualifying pairs
//     let j = 0; // right pointer; only moves forward (never backwards)
//     for (let i = 0; i < nums.length; i++) {
//       // fix left pointer i
//       while (j < nums.length && nums[j] - nums[i] <= maxDist) {
//         j++; // extend window [i, j)
//       }
//       // All indices in (i, j) pair with i and satisfy distance <= maxDist
//       // There are (j - i - 1) of them.
//       count += j - i - 1;
//       // Important: we do NOT reset j for the next i.
//       // Because the array is sorted, the valid window for i+1 starts at least at current j.
//     }
//     return count;
//   }

//   // Binary search the smallest distance D such that countPairs(D) >= k
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2); // candidate distance
//     if (countPairs(mid) >= k) {
//       // There are at least k pairs with distance <= mid,
//       // so the k-th smallest distance is <= mid. Try smaller distances.
//       right = mid;
//     } else {
//       // Not enough pairs yet; we need to allow a larger distance.
//       left = mid + 1;
//     }
//   }

//   // left == right: the smallest distance with at least k pairs beneath it
//   return left;
// }

