function fib(n: number): number {
  //  one solution is to create the fibonacci series up to that entry
  //  then return the index number of that entry

  // RECURSIVE SOLUTION
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);

  //  ITERATIVE SOLUTION
  //     const series: number[] = [0, 1];

  //     for (let i = 2; i <= n; i++) {
  //         const x: number = series[i - 1];
  //         const y: number = series[i - 2];

  //         series.push(x + y);
  // //  with this, we've built the entire fib series
  //     }

  //     return series[n]
}
