var survivedRobotsHealths = function (positions, healths, directions) {
  let ans = [];
  let stack = [];

  for (let i = 0; i < positions.length; i++) {
    ans.push({
      p: positions[i],
      h: healths[i],
      d: directions[i],
      i: i,
    });
  }

  ans.sort((a, b) => a.p - b.p);

  for (let i = 0; i < ans.length; i++) {
    let curr = ans[i];

    while (
      stack.length > 0 &&
      stack[stack.length - 1].d === "R" &&
      curr.d === "L"
    ) {
      let top = stack[stack.length - 1];
      if (top.h > curr.h) {
        top.h--;  
        curr = null;
        break;
      } else if (top.h < curr.h) {
        stack.pop();
        curr.h--;
      } else {
        stack.pop();
        curr = null;
        break;
      }
    }
    if (curr) {
      stack.push(curr);
    }
  }
  return stack
    .sort((a, b) => a.i - b.i) // original index order
    .map((r) => r.h);
};

console.log(survivedRobotsHealths([5,4,3,2,1], [2,17,9,15,10], "RRRRR")); // [2,17,9,15,10]
console.log(survivedRobotsHealths([3,5,2,6], [10,10,15,12], "RLRL"));    // [14]
