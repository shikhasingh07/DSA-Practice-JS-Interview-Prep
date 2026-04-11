var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    // Only start counting when `num` is the head of a sequence
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) len++;
      if (len > max) max = len;
    }
  }

  return max;
};

// quick sanity check
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4


