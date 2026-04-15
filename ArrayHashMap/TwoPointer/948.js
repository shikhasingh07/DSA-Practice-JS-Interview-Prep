var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a, b);

  let i = 0;
  let j = tokens.length - 1;
  let score = 0;
  let power = 0;
  let maxScore = 0;
  while (i <= j) {
    if (power >= tokens[i]) {
      power -= tokens[i];
      score++;
      maxScore = Math.max(score, maxScore);
      i++;
    } else if (score >= 1) {
      power += tokens[i];
      score--;
      j--;
    } else {
      break;
    }
  }

  return maxScore;
};

console.log(bagOfTokensScore([200, 100, 300, 400], 200));
