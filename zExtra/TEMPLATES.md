# DSA Templates — Quick Revision

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#         ARRAYS & SEARCH
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. HashMap / Frequency Counter — O(n) time, O(n) space

```js
// Two Sum
let map = new Map();
for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
}

// Frequency Counter
let freq = new Map();
for (let ch of s) freq.set(ch, (freq.get(ch) || 0) + 1);

// Anagram Check
let freq = {};
for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;
for (let ch of t) {
    if (!freq[ch]) return false;
    freq[ch]--;
}
return true;
```

**When:** Two sum, anagram, group anagrams, first unique char
**Problems:** 1, 49, 242, 387, 560

---

## 2. Two Pointers — O(n) time, O(1) space

```js
let left = 0, right = nums.length - 1;
while (left < right) {
    if (condition) left++;
    else right--;
}
```

**When:** Sorted array, pair sum, palindrome, 3Sum
**Problems:** 167, 15, 11, 125, 977

---

## 3. Sliding Window — Fixed Size — O(n) time, O(1) space

```js
for (let i = 0; i < k; i++) { /* build first window */ }

for (let i = k; i < nums.length; i++) {
    // add nums[i], remove nums[i-k]
    // update answer
}
```

**When:** Max/min/avg of subarray of exactly size k
**Problems:** 239, 567, 438, 643

---

## 4. Sliding Window — Variable Size — O(n) time, O(k) space

```js
let left = 0;
for (let right = 0; right < s.length; right++) {
    // add s[right] to window
    while (/* window invalid */) {
        // remove s[left]
        left++;
    }
    // update answer: right - left + 1
}
```

**When:** Longest/shortest subarray with condition
**Problems:** 3, 76, 424, 1004

---

## 5. Prefix Sum — O(n) time, O(n) space

```js
let prefix = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

// Sum from l to r (inclusive):
let rangeSum = prefix[r + 1] - prefix[l];
```

**When:** Subarray sum = k, range queries
**Problems:** 560, 238, 974, 303

---

## 6. Binary Search — O(log n) time, O(1) space

```js
// Standard: find exact target (lo <= hi)
let lo = 0, hi = nums.length - 1;
while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
}

// Find min/boundary (lo < hi, hi = mid)
while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (condition) hi = mid;   // mid could be answer
    else lo = mid + 1;
}
return lo;
```

**Rule:** `lo<=hi` + `hi=mid-1` → exact | `lo<hi` + `hi=mid` → min/boundary
**Problems:** 704, 74, 278

---

## 7. Binary Search — Rotated Array — O(log n) time

```js
// Search in rotated (33)
while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;

    if (nums[lo] <= nums[mid]) {         // LEFT sorted
        if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
        else lo = mid + 1;
    } else {                              // RIGHT sorted
        if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
        else hi = mid - 1;
    }
}
return -1;

// Find minimum in rotated (153)
while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > nums[hi]) lo = mid + 1; // min in right
    else hi = mid;                           // min in left (mid included)
}
return nums[lo];
```

**Key:** Always one half is sorted → compare `nums[lo]` vs `nums[mid]`
**Problems:** 33, 153, 81

---

## 8. Binary Search on Answer — O(n log m) time

```js
function canDo(val) { return /* feasibility check */ <= limit; }

let lo = 1, hi = Math.max(...arr);
while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canDo(mid)) hi = mid;
    else lo = mid + 1;
}
return lo;
```

**When:** "Min k such that possible" — capacity/speed problems
**Problems:** 875, 1011, 410, 1482

---

## 9. Kadane's Algorithm — O(n) time, O(1) space

```js
let maxSum = nums[0], current = nums[0];
for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]); // reset if negative
    maxSum = Math.max(maxSum, current);
}
return maxSum;
```

**When:** Maximum contiguous subarray sum
**Problems:** 53, 152 (product), 918 (circular)

---

## 10. Monotonic Stack — O(n) time, O(n) space

```js
let stack = []; // stores INDICES
let result = new Array(n).fill(-1);

for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length-1]] < nums[i]) {
        let idx = stack.pop();
        result[idx] = nums[i]; // nums[i] is next greater
    }
    stack.push(i); // ⚠️ index, not value!
}
```

**When:** Next greater/smaller element, temperature days
**Problems:** 496, 739, 84, 85, 901

---

## 11. Monotonic Deque (Sliding Window Max) — O(n) time

```js
let deque = [], result = [];
for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && nums[deque[deque.length-1]] <= nums[i]) deque.pop();
    if (deque[0] <= i - k) deque.shift();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
}
return result;
```

**Problems:** 239

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#           LINKED LIST
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 12. Fast & Slow Pointers (Floyd's) — O(n) time, O(1) space

```js
// Cycle detection
let slow = head, fast = head;
while (fast && fast.next) {
    slow = slow.next; fast = fast.next.next;
    if (slow === fast) return true;
}
return false;

// Find middle
while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
return slow;
```

**Problems:** 141, 142, 876, 287

---

## 13. Linked List Patterns — O(n) time, O(1) space

```js
// Reverse
let prev = null, curr = head;
while (curr) {
    let next = curr.next; curr.next = prev; prev = curr; curr = next;
}
return prev;

// Merge Two Sorted (dummy node pattern)
let dummy = new ListNode(0), curr = dummy;
while (l1 && l2) {
    if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
    else { curr.next = l2; l2 = l2.next; }
    curr = curr.next;
}
curr.next = l1 || l2;
return dummy.next;
```

**Problems:** 206, 21, 19, 876, 143

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#           STACK & QUEUE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 14. Stack Patterns — O(n) time, O(n) space

```js
// Valid Parentheses
let stack = [];
const map = { ')': '(', '}': '{', ']': '[' };
for (let ch of s) {
    if ('({['.includes(ch)) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
}
return stack.length === 0;
```

**Problems:** 20, 155, 150, 232

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#              TREES
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 15. Tree BFS (Level Order) — O(n) time, O(n) space

```js
let queue = [root], result = [];
while (queue.length > 0) {
    let size = queue.length, level = [];
    for (let i = 0; i < size; i++) {
        let node = queue.shift();
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    result.push(level);
}
```

**When:** Level-by-level, right side view, zigzag
**Problems:** 102, 199, 637, 116

---

## 16. Tree DFS — Height & Diameter — O(n) time, O(h) space

```js
// Height
function height(node) {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}

// Diameter / Max Path Sum — CLOSURE PATTERN
var solve = function(root) {
    let maxD = 0;
    function dfs(node) {
        if (!node) return 0;
        let left = dfs(node.left), right = dfs(node.right);
        maxD = Math.max(maxD, left + right); // update global
        return 1 + Math.max(left, right);    // return height
    }
    dfs(root);
    return maxD;
};
```

**⚠️ Closure variable for global max — NOT a parameter!**
**Problems:** 104, 543, 124, 112, 110, 98

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#             GRAPHS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 17. DFS on Grid — O(m*n) time, O(m*n) space

```js
function dfs(grid, i, j, visit) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    if (grid[i][j] === '0') return;
    if (visit.has(`${i},${j}`)) return; // ⚠️ COMMA required!
    visit.add(`${i},${j}`);
    dfs(grid, i+1, j, visit); dfs(grid, i-1, j, visit);
    dfs(grid, i, j+1, visit); dfs(grid, i, j-1, visit);
}
```

**When:** Islands, flood fill, connected regions
**Problems:** 200, 695, 130, 733, 417

---

## 18. BFS on Grid — O(m*n) time, O(m*n) space

```js
let queue = [[startI, startJ]], steps = 0;
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
    steps++; // ⚠️ OUTSIDE inner for loop
}
```

**When:** Shortest path, min steps, multi-source BFS
**Problems:** 994, 542, 286, 1162

---

## 19. DFS on Adjacency List — O(V+E) time, O(V) space

```js
function dfs(node, list, visit) {
    visit.add(node);
    for (let neighbor of list[node]) {
        if (!visit.has(neighbor)) dfs(neighbor, list, visit);
    }
}
// Build list
let list = Array.from({ length: n }, () => []);
for (let [u, v] of edges) { list[u].push(v); list[v].push(u); } // undirected
```

**Problems:** 547, 133, 323

---

## 20. Cycle Detection — Undirected — O(V+E) time

```js
function dfs(node, parent, list, visit) {
    if (visit.has(node)) return true;
    visit.add(node);
    for (let neighbor of list[node]) {
        if (neighbor === parent) continue; // ⚠️ skip parent edge
        if (dfs(neighbor, node, list, visit)) return true;
    }
    return false;
}
```

**⚠️ Must track parent — visited alone not enough for undirected!**
**Problems:** 261, 684

---

## 21. Cycle Detection — Directed (3 States) — O(V+E) time

```js
// 0=unvisited, 1=visiting, 2=done
function dfs(node, list, state) {
    if (state[node] === 1) return true;  // back edge = cycle!
    if (state[node] === 2) return false; // safe
    state[node] = 1;
    for (let neighbor of list[node]) {
        if (dfs(neighbor, list, state)) return true;
    }
    state[node] = 2;
    return false;
}
```

**Problems:** 207

---

## 22. Topological Sort (DFS) — O(V+E) time

```js
function dfs(node, list, state, result) {
    if (state[node] === 1) return true;
    if (state[node] === 2) return false;
    state[node] = 1;
    for (let neighbor of list[node]) {
        if (dfs(neighbor, list, state, result)) return true;
    }
    state[node] = 2;
    result.push(node); // push AFTER all neighbors
    return false;
}
// return result.reverse()
```

**Problems:** 210, 269

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#       DYNAMIC PROGRAMMING
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 23. DP — Linear — O(n) time, O(n) space

```js
let dp = new Array(n).fill(0);
dp[0] = nums[0];
for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i-1], (i >= 2 ? dp[i-2] : 0) + nums[i]); // ⚠️ i>=2 check
}
return dp[n-1];
```

**When:** dp[i] depends on dp[i-1] or dp[i-2]
**Problems:** 198, 213, 70, 746

---

## 24. DP — LIS (Lookback) — O(n²) time, O(n) space

```js
let dp = new Array(n).fill(1);
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
}
return Math.max(...dp);
```

**Problems:** 300, 354

---

## 25. DP — 0/1 Knapsack — O(n * target) time

```js
let dp = new Array(target + 1).fill(false);
dp[0] = true;
for (let num of nums) {
    for (let j = target; j >= num; j--) { // ⚠️ BACKWARD — each item once!
        dp[j] = dp[j] || dp[j - num];
    }
}
return dp[target];
```

**Problems:** 416, 494, 474

---

## 26. DP — Unbounded Knapsack — O(amount * coins) time

```js
let dp = new Array(amount + 1).fill(Infinity);
dp[0] = 0;
for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
        if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
}
return dp[amount] === Infinity ? -1 : dp[amount];
```

**Problems:** 322, 518, 139

---

## 27. DP — 2D (Two Sequences) — O(m*n) time and space

```js
let dp = Array.from({ length: m+1 }, () => new Array(n+1).fill(0));
for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
        else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]); // LCS
        // else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]); // Edit Distance
    }
}
return dp[m][n];
```

**Problems:** 1143 (LCS), 72 (Edit Distance), 583

---

## DP — Which Template?

```
Contiguous subarray max/min?        → Kadane's (#9)
dp[i] needs dp[i-1] or dp[i-2]?    → Linear DP (#23)
Longest increasing subsequence?     → LIS Lookback (#24)
Each item used ONCE?                → 0/1 Knapsack — backward loop (#25)
Item can REPEAT?                    → Unbounded Knapsack — forward loop (#26)
Two strings/sequences?              → 2D DP (#27)
```

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#           BACKTRACKING
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 28. Backtracking — O(n! or 2^n) time

```js
function dfs(start, current, result) {
    if (/* base case */) {
        result.push([...current]); // ⚠️ spread copy!
        return;
    }
    for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);
        dfs(i + 1, current, result); // i+1 = no reuse, i = reuse
        current.pop(); // undo
    }
}
```

**When:** All combinations, permutations, subsets
**Problems:** 46, 39, 78, 90, 131, 47

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#              GREEDY
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 29. Greedy Patterns — O(n log n) or O(n)

```js
// Jump Game (55) — can we reach end?
let maxReach = 0;
for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
}
return true;

// Meeting Rooms / Intervals — sort by start, track end
intervals.sort((a, b) => a[0] - b[0]);
let end = intervals[0][1];
for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) return false; // overlap!
    end = intervals[i][1];
}
return true;

// Task Scheduler (621) — most frequent task determines idle time
```

**When:** Local optimal → global optimal, interval scheduling, jump games
**Problems:** 55, 45, 435, 452, 621, 134

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#             SORTING
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 30. Merge Sort + Quick Select — O(n log n)

```js
// Merge Sort — stable
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

// Quick Select — kth largest, O(n) avg
function quickSelect(nums, lo, hi, k) {
    let pivot = nums[hi], p = lo;
    for (let i = lo; i < hi; i++) {
        if (nums[i] <= pivot) [nums[i], nums[p++]] = [nums[p], nums[i]];
    }
    [nums[p], nums[hi]] = [nums[hi], nums[p]];
    if (p === k) return nums[p];
    return p < k ? quickSelect(nums, p+1, hi, k) : quickSelect(nums, lo, p-1, k);
}
```

**Problems:** 912, 148 (list), 215 (Quick Select)

---

## 31. Merge Intervals — O(n log n) time

```js
intervals.sort((a, b) => a[0] - b[0]);
let result = [intervals[0]];
for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
    else result.push(intervals[i]);
}
```

**Problems:** 56, 57, 435, 253

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#               HEAP
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 32. Heap — Full Implementation — O(log n) push/pop

```js
class MinHeap {
    constructor() { this.heap = []; }
    push(val) { this.heap.push(val); this._bubbleUp(this.heap.length - 1); }
    pop() {
        const min = this.heap[0], last = this.heap.pop();
        if (this.heap.length > 0) { this.heap[0] = last; this._sinkDown(0); }
        return min;
    }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }

    _bubbleUp(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p] > this.heap[i]) {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]; i = p;
            } else break;
        }
    }
    _sinkDown(i) {
        let n = this.heap.length;
        while (true) {
            let l = 2*i+1, r = 2*i+2, s = i;
            if (l < n && this.heap[l] < this.heap[s]) s = l;
            if (r < n && this.heap[r] < this.heap[s]) s = r;
            if (s === i) break;
            [this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]]; i = s;
        }
    }
}
// MaxHeap: flip > to < in bubbleUp, < to > in sinkDown
```

**Key:** Parent=`(i-1)/2` | Left=`2i+1` | Right=`2i+2`
**Patterns:** Kth largest → MinHeap size k → `peek()` = answer
**Problems:** 215, 347, 23, 703

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#          BIT MANIPULATION
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 33. Bit Manipulation — O(1) or O(32) time

```js
n & 1            // last bit (1=odd, 0=even)
n >> 1           // right shift (÷2)
n & (n - 1)      // remove last set bit
n & (n-1) === 0  // power of 2?
a ^ a === 0      // same XOR = 0
a ^ 0 === a      // XOR with 0 = same

// Count 1 bits
let count = 0;
while (n > 0) { if (n & 1) count++; n = n >> 1; }

// Reverse 32 bits
let result = 0;
for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >> 1;
}
return result >>> 0; // ⚠️ unsigned right shift!
```

**Problems:** 191, 338, 190, 268 (XOR), 371 (sum), 201

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#               TRIE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 34. Trie (Prefix Tree) — O(m) per operation, m=word length

```js
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() { this.root = new TrieNode(); }

    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) node.children[ch] = new TrieNode();
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) return false;
            node = node.children[ch];
        }
        return node.isEnd; // must be end of word
    }

    startsWith(prefix) {
        let node = this.root;
        for (let ch of prefix) {
            if (!node.children[ch]) return false;
            node = node.children[ch];
        }
        return true; // just needs to exist, not isEnd
    }
}
```

**When:** Prefix search, autocomplete, word dictionary
**Problems:** 208, 211, 212, 648, 720

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#            REFERENCE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Pattern → Problems (Quick Ref)

| Pattern | Problems |
|---------|----------|
| HashMap / Frequency | 1, 49, 242, 387, 560 |
| Two Pointers | 167, 15, 11, 125 |
| Sliding Window Fixed | 239, 567, 438 |
| Sliding Window Variable | 3, 76, 424 |
| Prefix Sum | 560, 238, 974 |
| Binary Search | 704, 74, 278 |
| Binary Search Rotated | 33, 153, 81 |
| Binary Search on Answer | 875, 1011, 410 |
| Kadane's | 53, 152, 918 |
| Monotonic Stack | 496, 739, 84 |
| Monotonic Deque | 239 |
| Fast & Slow | 141, 142, 876 |
| Linked List | 206, 21, 19, 876 |
| Stack | 20, 155, 150 |
| Tree BFS | 102, 199, 637 |
| Tree DFS | 104, 543, 124, 112 |
| DFS Grid | 200, 695, 130, 733 |
| BFS Grid | 994, 542, 286 |
| DFS Adj List | 547, 133, 323 |
| Cycle Undirected | 261, 684 |
| Cycle Directed | 207 |
| Topo Sort | 210, 269 |
| DP Linear | 198, 213, 70 |
| DP LIS | 300, 1143, 354 |
| DP 0/1 Knapsack | 416, 494 |
| DP Unbounded | 322, 518 |
| DP 2D | 1143, 72, 583 |
| Backtracking | 46, 39, 78, 90, 131 |
| Greedy | 55, 45, 435, 452, 621 |
| Merge Sort / Quick Select | 912, 148, 215 |
| Merge Intervals | 56, 57, 435 |
| Heap | 215, 347, 23, 703 |
| Bit Manip | 191, 338, 190, 268, 371, 201 |
| Trie | 208, 211, 212, 648 |

---

## Edge Cases to Remember

| Pattern | Watch Out For |
|---------|---------------|
| Binary Search | `lo<=hi` → exact \| `lo<hi` → min/boundary |
| Binary Search | `hi=mid` vs `hi=mid-1` — mid could be answer! |
| DFS Grid | Key: `${i},${j}` NOT `${i}${j}` (comma!) |
| DP Linear | `dp[i-2]` when i=1 → check `i >= 2` |
| Backtracking | Push `[...current]` copy, not `current` |
| BFS | Mark visited BEFORE pushing to queue |
| Bit Manip | `result >>> 0` for unsigned JS (reverse bits) |
| Tree Diameter | Closure variable — NOT parameter |
| Sliding Window | Size = `right - left + 1` |
| Cycle Undirected | Skip `neighbor === parent` |
| 0/1 Knapsack | Backward j loop |
| Unbounded | Forward i loop |
| Trie | `isEnd = true` on insert end, search checks `isEnd`, startsWith doesn't |

---

## Interview Follow-Up Questions

| You solve... | They ask next... |
|-------------|-----------------|
| 200 (Islands) | 695 (Max Area), 130 (Surrounded) |
| 33 (Rotated) | 153 (Find Min), 81 (duplicates) |
| 53 (Max Subarray) | 152 (Product), 918 (circular) |
| 198 (House Robber) | 213 (circular), 337 (tree) |
| 46 (Permutations) | 47 (duplicates), 78 (subsets) |
| 322 (Coin Change) | 518 (count combinations) |
| 300 (LIS) | 1143 (LCS), 354 (Russian Dolls) |
| 141 (Cycle) | 142 (find start) |
| 56 (Merge Intervals) | 57 (insert), 435 (remove) |
| 207 (Course Schedule) | 210 (order), 269 (alien dict) |
| 543 (Diameter) | 124 (Max Path Sum) |
| 3 (Longest Substr) | 76 (Min Window Substr) |
| 208 (Trie) | 211 (wildcard search), 212 (word search II) |
| 55 (Jump Game) | 45 (Jump Game II — min jumps) |

---

## Quick Memory Tricks

- **BFS vs DFS:** Shortest = BFS, Baaki sab = DFS
- **0/1 vs Unbounded:** Ek baar = backward `j`, Repeat = forward `i`
- **Binary Search lo<hi:** `hi=mid` pattern (find min/answer)
- **Binary Search lo<=hi:** `hi=mid-1` pattern (find exact)
- **Rotated Array:** Kaunsi half sorted? `nums[lo]` vs `nums[mid]`
- **Monotonic Stack:** Index store karo, value nahi
- **Backtracking:** push → recurse → pop
- **Tree Diameter:** Closure variable, return height to parent
- **Cycle Undirected:** Parent track karo
- **Cycle Directed:** 3 states (0/1/2)
- **Heap index:** Parent=`(i-1)/2`, Left=`2i+1`, Right=`2i+2`
- **Trie:** `children = {}`, `isEnd = false` — search needs isEnd, startsWith doesn't
- **Greedy:** Sort first, then make local optimal choice
