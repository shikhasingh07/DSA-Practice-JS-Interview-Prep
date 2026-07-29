var maxProfit = function (prices) {
    let hold = -prices[0]; // buy kiya → profit ghata
    let cash = 0;

    for (let i = 1; i < prices.length; i++) {
        let newHold = Math.max(hold, cash - prices[i]);
        let newCash = Math.max(cash, hold + prices[i]);
        hold = newHold;
        cash = newCash;
    }

   return cash;
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices))