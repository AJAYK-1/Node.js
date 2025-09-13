// You are given an array prices where prices[i] is the price of a giben stock on the ith day.
// You want to miximize your profit by chooding a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const Stocks = prices => {
    let buy = prices[0]
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i]
        }
        if (prices[i] - buy > profit) {
            profit = prices[i] - buy
        }
    }
    return profit
}

const prices1 = [7, 1, 5, 3, 6, 4]
console.log(Stocks(prices1));
