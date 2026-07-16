/**
 * 1049. Last Stone Weight II — "Split into Two Groups, Minimize Difference" (0/1 Knapsack)
 *
 * Intuition:
 * Smashing stones = assigning + or - to each stone.
 * Final result = |group1 - group2| = |total - 2 * group1|
 * Minimize by finding largest subset sum <= total/2.
 *
 * Pattern: 0/1 Knapsack — boolean (can we reach sum j?)
 * dp[j] = true if subset with sum j is possible
 *
 * Time: O(n * total/2)  |  Space: O(total/2)
 */
function dp(stones, half, arr) {
    arr[0] = true; // sum 0 always reachable

    for (let num of stones) {
        for (let i = half; i >= num; i--) { // backward — each stone used once
            console.log(arr[i], { i })
            arr[i] = arr[i] || arr[i - num];
        }
    }

    // find largest reachable sum <= total/2
    for (let i = half; i >= 0; i--) {
        if (arr[i]) return i;
    }

    return arr;
}

var lastStoneWeightII = function (stones) {
    let total = stones.reduce((a, b) => a + b);
    let half = Math.floor(total / 2);
    let returnedMax = dp(stones, half, new Array(item + 1).fill(false));

    return total - 2 * returnedMax;
};

let stones = [2, 7, 4, 1];
console.log(lastStoneWeightII(stones));


""