var candy = function (ratings) {
  // ans -> to collect
  // loop over from left to right
  // compare and put value
  // loop right to left
  // compare and take max values
  // return ans

  let ans = [];
  for (let i = 0; i < ratings.length; i++) {
    if (i === 0) {
      ans[0] = 1;
    } else if (ratings[i] > ratings[i - 1]) {
      ans[i] = ans[i - 1] + 1;
    } else {
      ans[i] = 1;
    }
  }

  for (i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      ans[i] = Math.max(ans[i], ans[i + 1] + 1);
    }
  }
  return ans.reduce((sum, c) => sum + c, 0)
};
let ratings = [1, 2, 87, 87, 87, 2, 1];
console.log(candy(ratings));
