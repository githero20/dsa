var maxProfit = function (prices) {
  // You are given an array prices where prices[i] is the price of a given stock on the ith day.
  // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
  // ..
  //   brute force (O(n**2) time complexity, O(1) space complexity)
  //   let diff = 0;
  //   let max = 0;
  //   for (let v = 0; v < prices.length; v++) {
  //     for (let i = v + 1; i < prices.length; i++) {
  //       diff = prices[i] - prices[v];
  //       if (diff > max) {
  //         max = diff;
  //       }
  //       //   console.log(diff);
  //     }
  //   }
  //   return max;
  //   console.log(max);
  //   ..
  // One-pass approach (O(n) time complexity, O(1) space complexity)
  let diff = 0;
  let minSoFar = 10000; //this is the max integer value from the question

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minSoFar) {
      minSoFar = prices[i];
      // this way we're keeping track of the minimum value
    } else {
      diff = Math.max(diff, prices[i] - minSoFar);
    }
  }
  //   return diff;
  //   console.log(diff);
};

maxProfit([7, 6, 4, 3, 1]);
