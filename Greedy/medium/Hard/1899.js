var mergeTriplets = function (triplets, target) {
  // find larget in target
  // find and eliment larget triplate
  // loop again -> and compare two triplates
  // put in ans and return ans;

  let result = [0, 0, 0];
  for (let i = 0; i < triplets.length; i++) {
    if (triplets[i].some((val, j) => val > target[j])) continue;
    result[0] = Math.max(result[0], triplets[i][0]);
    result[1] = Math.max(result[1], triplets[i][1]);
    result[2] = Math.max(result[2], triplets[i][2]);
  }
  return (
    result[0] === target[0] &&
    result[1] === target[1] &&
    result[2] === target[2]
  );
};

let triplets = [
    [2, 5, 3],
    [1, 8, 4],
    [1, 7, 5],
  ],
  target = [2, 7, 5];
console.log(mergeTriplets(triplets, target));
