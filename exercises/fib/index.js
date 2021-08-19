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
// Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    // this checks to see if the arguments we're calling are already in the cache, if it is then it returns it

    const result = fn.apply(this, args);
    cache[args] = result;
    // this creates keys in the cache object as the arguments we're passing into the function.
    // and stores their current values

    return result;
  };
}

function oldFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
  //recursion, it calls itself until it gets to the base case.
  //uses the base case to build itself from the ground up.
}

const fib = memoize(oldFib);
// this memoizes the function (oldFib) after it has run once and then stores it in the const fib
//this takes in the memoized fib function (oldFib) and stores it in the const fib for recursion
// fib = memoize(fib) also works

module.exports = fib;
