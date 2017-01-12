function getMaxProfit(stockPrices) {
  //start min pointer at 0
  let minP = 0;
  //start max pointer at 1
  let maxP = 1;
  //save current min and max
  let curMin = stockPrices[minP];
  let curMax = stockPrices[maxP];
  //save largest difference as max - min
  let largestProfit = curMax - curMin;
  //while before the end
  while (maxP < stockPrices.length) {
    //move both pointers up by one
    minP++;
    maxP++;
    //if the difference between the new max and new min is greater than current profit
    if (stockPrices[maxP] - stockPrices[minP] > largestProfit) {
      curMax = stockPrices[maxP];
      //ensure that keeping min where it is wouldn't be a bigger profit before updating min
      if (stockPrices[maxP] - curMin < stockPrices[maxP] - stockPrices[minP]) {
        curMin = stockPrices[minP];
      }
      largestProfit = curMax - curMin;
    } else if (stockPrices[maxP] - curMin > largestProfit) {
      curMax = stockPrices[maxP];
      largestProfit = curMax - curMin;
    }
  }
  return largestProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 6, 11, 9]; // 6
// var stockPricesYesterday = [10, 8, 5, 4, 1, 0]; // -1

console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)