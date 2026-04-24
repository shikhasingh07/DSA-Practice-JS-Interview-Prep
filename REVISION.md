# Daily Revision List
> Problems to revisit and revise each day

---

## Two Pointers

### Sorting + Two Pointers
- [ ] 611. Valid Triangle Number — *why `count += right - left` (fix biggest stick, count valid pairs)*

### String / Reverse
- [ ] 31. Next Permutation — *3 steps: find dip (i), swap with next bigger (j), reverse after i*
- [ ] 161. One Edit Distance — *check edit BEFORE setting flag; handle insert/delete/replace separately*

### Greedy + Two Pointers
- [ ] 2491. Divide Players Into Teams — *sort + pair smallest/largest; all pairs must have same sum; chemistry += left * right; return -1 if any pair differs*

### Sum
- [ ] 658. Find K Closest Elements — *one while loop: `right - left + 1 > k`; compare distances, shrink from farther end*
- [ ] 1498. Number of Subsequences — *sort + two pointers; count += 2^(right-left) when nums[left]+nums[right] <= target; precompute powers of 2*

---

## How to use
- Solve the problem again from scratch (no peeking)
- If solved confidently → remove from list
- If struggled → keep for next day
