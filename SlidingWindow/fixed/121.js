var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let index = 0; index < prices.length; index++) {
    minPrice = Math.min(minPrice, prices[index]);
    maxProfit = Math.max(maxProfit, prices[index] - minPrice);
  }

  return maxProfit;
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
