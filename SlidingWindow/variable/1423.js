var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  const totalSum = cardPoints.reduce((a, b) => a + b, 0);
  const windowSize = n - k;

  // find min sum window of size windowSize
  let windowSum = 0,
    minSum = Infinity;

  for (let i = 0; i < n; i++) {
    windowSum += cardPoints[i];

    if (i >= windowSize) {
      windowSum -= cardPoints[i - windowSize];
    }

    if (i >= windowSize - 1) {
      minSum = Math.min(minSum, windowSum);
    }
  }

  return totalSum - minSum;
};

let cardPoints = [1, 2, 3, 4, 5, 6, 1],
  k = 3;
console.log(maxScore(cardPoints, k));
