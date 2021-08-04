// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iterative Solution
// function fib(n) {
//   // create the fibonacci series up to that entry
//   // return the index number of that entry

//   const series = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const x = series[i - 1];
//     const y = series[i - 2];

//     series.push(x + y);
//   }

//   return series[n];
// }

// Recursive Solution

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
