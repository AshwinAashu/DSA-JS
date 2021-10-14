//StockPrice - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


function stockPrice(prices){
  let minPrice = prices[0];
  let profit = 0;
  for(let i =0; i<prices.length; i++){
    if(minPrice > prices[i]){
      minPrice= prices[i];
    }else{
      profit = Math.max(prices[i]-minPrice , profit);
    }
  }
  return profit;

}

//issue - maxPrice always takes any value that  has been provided to interval
//as long as it is greater than the minPrice
console.log(stockPrice([7,1,5,2,4,6,4,2]));
