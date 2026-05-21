function remove(s, pair, pts) {
  let stack = [],
    score = 0;
  for (let char of s) {
    if (stack.length && stack[stack.length - 1] + char === pair) {
      stack.pop();
      score += pts;
    } else {
      stack.push(char);
    }
  }
  return { score, remaining: stack.join("") };
}

var maximumGain = function (s, x, y) {
  let first = y > x ? "ba" : "ab";
  let second = y > x ? "ab" : "ba";
  let r1 = remove(s, first, Math.max(x, y));
  let r2 = remove(r1.remaining, second, Math.min(x, y));
  return r1.score + r2.score;
};

let s = "cdbcbbaaabab",
  x = 4,
  y = 5;
console.log(maximumGain(s, x, y));
