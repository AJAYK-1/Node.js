// Find the biggest profit you could make by buying low and selling high only once.

const maxProfit = prices => {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i]

        // minPrice = Math.min(minPrice, currentPrice)
        if (minPrice > currentPrice) minPrice = currentPrice

        const Profit = currentPrice - minPrice

        // maxProfit = Math.max(maxProfit, Profit)
        if (maxProfit < Profit) maxProfit = Profit
        console.log(maxProfit);
    }
    
    return maxProfit
}

const prices = [6, 2, 1, 7, 5, 8, 4]
console.log('Maximum Profit: ', maxProfit(prices));