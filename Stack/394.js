var decodeString = function (s) {
  let count = 0;
  let current = "";
  const countStack = [];
  const strStack = [];

  for (let item of s) {
    if (!isNaN(item)) {
      count = count * 10 + Number(item);
    } else if (char === "[") {
      countStack.push(count);
      strStack.push(current);
      count = 0;
      current = "";
    } else if (char === "]") {
      const cnt = countStack.pop();
      const prev = strStack.pop();
      current = prev + current.repeat(cnt);
    } else {
        current += item;
    }
  }
  return current;
};
let str = "3[a]2[bc]";
console.log(decodeString(str));
