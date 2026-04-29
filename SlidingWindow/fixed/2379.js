var minimumRecolors = function (blocks, k) {
  let count = 0;
  let min = Infinity;
  for (let str = 0; str < blocks.length; str++) {
    if (blocks[str] === "W") {
      count += 1;
    }

    if (str >= k) {
      if (blocks[str - k] === "W") count -= 1;
    }
    if (str >= k - 1) {
      min = Math.min(min, count);
    }
  }
  return min;
};
let block = "WBBWWBBWBW",
  k = 7;
console.log(minimumRecolors(block, k));
