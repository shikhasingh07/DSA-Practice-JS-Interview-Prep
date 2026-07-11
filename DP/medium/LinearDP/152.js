/**
 * 📈 Flip the Sign — Maximum Product Subarray
 *
 * # Intuition
 * Negative × negative = positive — so a big negative can flip to a big positive.
 * Track both maxProd and minProd at every index, because today's min can become tomorrow's max.
 *
 * # Approach
 * 1. Init maxProd, minProd, best = nums[0]
 * 2. For each element, compute new max and min using all three options:
 *    - nums[i] alone (reset — e.g. after a 0)
 *    - maxProd * nums[i]
 *    - minProd * nums[i]
 * 3. Update best with new max
 *
 * # Complexity
 * - Time: O(n)
 * - Space: O(1)
 */
var maxProduct = function (nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let best = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let max = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
        let min = Math.min(nums[i], maxProd * nums[i], minProd * nums[i]);
        best = Math.max(best, max);
        maxProd = max;
        minProd = min;
    }

    return best;
};

let nums = [2, 3, -2, 4];
console.log(maxProduct(nums));
