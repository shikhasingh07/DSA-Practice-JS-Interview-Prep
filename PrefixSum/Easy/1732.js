var largestAltitude = function (gain) {
  let peak = 0;
  let ans = [];
  ans[0] = 0;
  for (let i = 0; i <= gain.length; i++) {
    if (i > 0) {
      ans[i] = ans[i - 1] + gain[i - 1];
      peak = Math.max(peak, ans[i]);
    }
  }

  return peak;
};

let gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
