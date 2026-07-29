var maxProfit = function (prices) {

    let hold1 = -prices[0]  // pehli buy
    let sold1 = 0           // pehli sell
    let hold2 = -prices[0]  // doosri buy
    let sold2 = 0           // doosri sell


    for (let i = 0; i < prices.length; i++) {
        hold1 = Math.max(hold1, -prices[i])
        sold1 = Math.max(sold1, hold1 + prices[i])
        hold2 = Math.max(hold2, sold1 - prices[i])
        sold2 = Math.max(sold2, hold2 + prices[i])
    }

    return sold2;
};
let prices = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(prices))