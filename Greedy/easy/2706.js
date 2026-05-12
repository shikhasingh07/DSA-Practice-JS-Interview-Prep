var buyChoco = function (prices, money) {
  // count of chocalte
  // sort of price
  // loop over prices
  // minus money if > money -=minus
  // if count > 2 return false
  // return true

  prices.sort((a, b) => a - b);
  if (prices[0] + prices[1] <= money) {
    return money - prices[0] - prices[1];
  }
  return money;
};
let prices = [1, 2, 2],
  money = 3;
console.log(buyChoco(prices, money));
