# DSA Templates — Quick Revision

---

## 1. DFS on Grid

```js
function dfs(grid, i, j, visit) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    if (grid[i][j] === '0') return;
    if (visit.has(`${i},${j}`)) return;
    visit.add(`${i},${j}`);
    dfs(grid, i+1, j, visit);
    dfs(grid, i-1, j, visit);
    dfs(grid, i, j+1, visit);
    dfs(grid, i, j-1, visit);
}
```

**When:** Islands, flood fill, connected regions, boundary DFS

---

## 2. BFS on Grid

```js
let queue = [[startI, startJ]];
let steps = 0;
const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

while (queue.length > 0) {
    let size = queue.length;
    for (let k = 0; k < size; k++) {
        let [i, j] = queue.shift();
        for (let [dr, dc] of dirs) {
            let ni = i+dr, nj = j+dc;
            if (ni<0||nj<0||ni>=grid.length||nj>=grid[0].length) continue;
            if (visited) continue;
            queue.push([ni, nj]);
        }
    }
    steps++;  // steps++ OUTSIDE k loop
}
```

**When:** Shortest path, minimum steps, multi-source BFS (994, 542)

---

## 3. DFS on Adjacency List

```js
function dfs(node, list, visit) {
    visit.add(node);
    for (let neighbor of list[node]) {
        if (!visit.has(neighbor)) dfs(neighbor, list, visit);
    }
}

// Build adjacency list
let list = Array.from({ length: n }, () => []);
for (let [u, v] of edges) {
    list[u].push(v);
    list[v].push(u); // undirected only
}
```

**When:** Connected components, provinces, clone graph

---

## 4. Cycle Detection — Undirected

```js
function dfs(node, parent, list, visit) {
    if (visit.has(node)) return true; // cycle!
    visit.add(node);
    for (let neighbor of list[node]) {
        if (neighbor === parent) continue;
        if (dfs(neighbor, node, list, visit)) return true;
    }
    return false;
}
```

---

## 5. Cycle Detection — Directed (3 States)

```js
// state: 0=unvisited, 1=visiting, 2=done
function dfs(node, list, state) {
    if (state[node] === 1) return true;  // cycle!
    if (state[node] === 2) return false; // safe

    state[node] = 1;
    for (let neighbor of list[node]) {
        if (dfs(neighbor, list, state)) return true;
    }
    state[node] = 2;
    return false;
}
```

**When:** Course Schedule (207)

---

## 6. Topological Sort (DFS)

```js
function dfs(node, list, state, result) {
    if (state[node] === 1) return true;
    if (state[node] === 2) return false;
    state[node] = 1;
    for (let neighbor of list[node]) {
        if (dfs(neighbor, list, state, result)) return true;
    }
    state[node] = 2;
    result.push(node); // push when done
    return false;
}
// return result.reverse()
```

**When:** Course order (210), dependency ordering

---

## 7. Sliding Window — Fixed Size

```js
// Build first window
for (let i = 0; i < k; i++) { ... }

// Slide
for (let i = k; i < nums.length; i++) {
    // add nums[i], remove nums[i-k]
}
```

---

## 8. Sliding Window — Variable Size

```js
let left = 0;
for (let right = 0; right < nums.length; right++) {
    // add nums[right] to window
    while (window invalid) {
        // remove nums[left]
        left++;
    }
    // update answer
}
```

---

## 9. Binary Search

```js
let lo = 0, hi = nums.length - 1;
while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
}
```

**Search on answer:** `lo=min, hi=max`, find smallest valid value

---

## 10. Two Pointers

```js
let left = 0, right = nums.length - 1;
while (left < right) {
    // check condition
    if (condition) left++;
    else right--;
}
```

---

## 11. Backtracking

```js
function dfs(start, current, result) {
    if (base case) {
        result.push([...current]);
        return;
    }
    for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);
        dfs(i+1, current, result); // i+1 = no reuse, i = reuse
        current.pop();
    }
}
```

---

## 12. Tree BFS (Level Order)

```js
let queue = [root];
while (queue.length > 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
        let node = queue.shift();
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    result.push(level);
}
```

---

## 13. DP — Linear

```js
// dp[i] = max/min at index i
let dp = new Array(n).fill(0);
dp[0] = nums[0];
for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]); // House Robber
}
return dp[n-1];
```

---

## 14. DP — LIS (Lookback)

```js
let dp = new Array(n).fill(1);
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j]+1);
    }
}
return Math.max(...dp);
```

---

## 15. DP — 0/1 Knapsack

```js
let dp = new Array(target+1).fill(false);
dp[0] = true;
for (let num of nums) {
    for (let j = target; j >= num; j--) { // backward!
        dp[j] = dp[j] || dp[j-num];
    }
}
return dp[target];
```

---

## 16. DP — Unbounded Knapsack

```js
let dp = new Array(amount+1).fill(Infinity);
dp[0] = 0;
for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
        if (i >= coin) dp[i] = Math.min(dp[i], dp[i-coin]+1);
    }
}
```

---

## 17. Heap (Min Heap Simulation)

```js
let minHeap = [];
minHeap.push(val);
minHeap.sort((a,b) => a-b); // sort after push
let min = minHeap.shift();  // pop min
```

---

## 18. Bit Manipulation

```js
n & 1        // last bit (odd/even)
n >> 1       // right shift (remove last bit)
n & (n-1)    // remove last set bit
n & (n-1) === 0  // power of 2?
a ^ a === 0  // same XOR = 0
a ^ 0 === a  // XOR with 0 = same

// Count 1 bits
while (n > 0) {
    if (n & 1) count++;
    n = n >> 1;
}
```

---

## 19. Kadane's Algorithm (Maximum Subarray)

```js
let maxSum = nums[0];
let current = nums[0];

for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]); // reset if negative
    maxSum = Math.max(maxSum, current);
}
return maxSum;
```

**When:** Maximum subarray sum, any contiguous subarray problem

---

## Key Rules

| Pattern | Use When |
|---------|----------|
| BFS | Shortest path, minimum steps |
| DFS | Connected, cycle, count |
| Sliding Window | Subarray/substring problems |
| Binary Search | Sorted array or "search on answer" |
| Backtracking | All combinations/permutations |
| DP | Optimal value, count ways |
