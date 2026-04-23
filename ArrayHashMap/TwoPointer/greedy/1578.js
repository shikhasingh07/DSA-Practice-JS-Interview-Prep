var minCost = function (colors, neededTime) {
  if (colors.length === 0) {
    return -1;
  }

  if (colors.length !== neededTime.length) {
    return -1;
  }

  let totaltime = 0;
  let max = neededTime[0];
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      totaltime += Math.min(max, neededTime[i]);
      max = Math.max(max, neededTime[i]);
    } else {
      max = neededTime[i];
    }
  }

  return totaltime;
};

console.log(minCost("abaac", [1, 2, 3, 4, 5]));
