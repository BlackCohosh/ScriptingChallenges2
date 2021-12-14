// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

const best = prices => {
    var maxProfit = 0
    // var currentMax = 0
    var currentLow

    for (i=0; i < prices.length; i++) {
        if (currentLow === undefined || currentLow > prices[i]) {
            currentLow = prices[i]
        }
        var profit = prices[i] - currentLow

        if (profit > maxProfit){
            maxProfit = profit
        }
    }
// return maxProfit
return ` ${maxProfit} - buy at $${Math.min(...prices)}, sell at $${Math.max(...prices)}.`
}

console.log(best([7, 9, 5, 6, 3, 2]))