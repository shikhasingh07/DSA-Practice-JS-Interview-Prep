/**
 * 🔁 Same Number, Different Position — Permutations Without the Clones
 *
 * # Intuition
 * Permutations mein order matter karta hai, but duplicates se same permutation
 * dobara ban sakti hai. Sort karo + used array + same level duplicate skip.
 *
 * # Approach
 * 1. Sort karo — duplicates adjacent aa jayein
 * 2. used[] se track karo ki element current permutation mein already hai
 * 3. Loop 0 to n:
 *    - if used[i] → skip
 *    - if nums[i] === nums[i-1] && !used[i-1] → skip (same level duplicate)
 * 4. Base case: current.length === n → ans mein daalo
 *
 * # Complexity
 * - Time: O(n! * n)
 * - Space: O(n)
 */

function result(nums, n, idx, current, ans, used) {
    if (current.length === n) {
        ans.push([...current]);
        return ans;
    }

    for (let i = 0; i < n; i++) {
        if (used[i]) continue;  
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        used[i] = true;
        current.push(nums[i]);
        result(nums, n, 0, current, ans, used);  
        current.pop();
        used[i] = false;
    }
}

var permuteUnique = function (nums) {
    let ans = [];
    let used = new Array(nums.length).fill(false);
    result(nums.sort((a, b) => a - b), nums.length, 0, [], ans, used);
    return ans;
};
let nums = [1, 1, 2];
console.log(permuteUnique(nums))