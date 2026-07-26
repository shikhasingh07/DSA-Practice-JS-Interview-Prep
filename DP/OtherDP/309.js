var maxProfit = function (prices) {
    let hold, sold, rest;

    hold = -prices[0]
    sold = 0
    rest = 0

    for (let i = 1; i < prices.length; i++) {
        let newHold = Math.max(hold, rest - prices[i]);
        let newSold = hold + prices[i];
        let newRest = Math.max(rest, sold);

        hold = newHold;
        sold = newSold;
        rest = newRest;
    }

    return Math.max(sold, rest);
};
let prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices))