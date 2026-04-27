var maxSatisfied = function (customers, grumpy, minutes) {
  let calm = 0;
  let windowSum = 0;
  let maxWindow = 0;
  for (let index = 0; index < customers.length; index++) {
    if (grumpy[index] === 0) calm += customers[index];

    if (grumpy[index] === 1) windowSum += customers[index];

    //    here deleting last ele
    if (index >= minutes) {
      if (grumpy[index - minutes] === 1) {
        windowSum -= customers[index - minutes];
      }
    }
    maxWindow = Math.max(maxWindow, windowSum);
  }

  return calm + maxWindow;
};

let customers = [1, 0, 1, 2, 1, 1, 7, 5],
  grumpy = [0, 1, 0, 1, 0, 1, 0, 1],
  minutes = 3;
console.log(maxSatisfied(customers, grumpy, minutes));
