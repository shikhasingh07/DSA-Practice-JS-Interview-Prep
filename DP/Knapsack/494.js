
 * 494. Target Sum — "Signs → Subset Sum" (0/1 Knapsack)
 *
 * Intuition:
 * Assign + or - to each number to reach target.
 * If sum of + numbers = P, then:
 *   P - (total - P) = target  =>  P = (total + target) / 2
 * Reduces to: how many subsets have sum = P?
 *
 * Pattern: 0/1 Knapsack — count ways
 * dp[j] = number of ways to reach sum j
 *
 * Time: O(n * P)  |  Space: O(P)


function dp(nums, target, arr) {
    arr[0] = 1; // empty subset = 1 way to make sum 0

    for (let num of nums) {
        for (let i = target; i >= num; i--) { // backward — 0/1 knapsack
            arr[i] += arr[i - num];
        }
    }

    return arr[target];
}

var findTargetSumWays = function (nums, target) {
    const total = nums.reduce((arr, item) => arr + item);
    if ((total + target) % 2 !== 0) return 0; // P non-integer — impossible
    let P = (total + target) / 2;
    if (P < 0) return 0; // negative target — impossible

    return dp(nums, P, new Array(P + 1).fill(0));
};

let nums = [1, 1, 1, 1, 1], target = 3;
console.log(findTargetSumWays(nums, target)); // 5
