var maximumUnits = function (boxTypes, truckSize) {
  // sort
  boxTypes.sort((a, b) => b[1] - a[1]);

  // loop
  let min = 0,
    total = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize > 0) {
      console.log(boxTypes[i][0], boxTypes[i][1]);
      min = Math.min(boxTypes[i][0], truckSize) * boxTypes[i][1];
      total += min;
      truckSize -= Math.min(boxTypes[i][0], truckSize);
    }
  }

 return total;
};
let boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;
console.log(maximumUnits(boxTypes, truckSize));
