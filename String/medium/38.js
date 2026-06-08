var countAndSay = function (n) {
  let curr = "1";
  for (let i = 0; i < n - 1; i++) {
    let next = "";
    let j = 0;

    while (j < curr.length) {
      let char = curr[j];
      let count = 0;
      while (j < curr.length && curr[j] === char) {
        // inner: count consecutive
        count++;
        j++;
      }

      next += count + char;
    }
    curr = next;
  }
  return curr;
};
let n = 4;
console.log(countAndSay(n));
