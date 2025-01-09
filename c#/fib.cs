// computes the nth fib number
int fib(int n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib (n - 2)
  }
}

// time is O(noOfBranches^N) or O(2^N)

// memoizes the previously computed values in an integer array

// 1 void allFib(int n) {
// 2 int[] memo = new int[n + 1];
// 3 for (int i * 0; i < n; 1++) {
// 4 System.out.println(i + " + fib(ij memo));
// 5 >
// 6 }
// 7
// 8 int fib(int n, int[] memo) {
// 9 if (n <= 0) return 0;
// 10 else if (n == 1) return 1;
// 11 else if (memo[n] > 0) return memo[n];
// 12
// 13 memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// 14 return memo[n];
// 15 }

// Let's walk through what this algorithm does.
// f i b ( l ) -> return 1
// f i b < 2 )
// f i b ( l ) -> return 1
// f i b ( 0 ) -> return 0
// store 1 at memo[2]
// f i b ( 3 )
// f i b ( 2 ) -> lookup memo[2]
// f l b ( l ) -> return 1
// s t o r e 2 at rrtemo[3]
// f i b ( 4 )
// f i b ( 3 ) -> lookup memo[3]
// f i b ( 2 ) -> lookup mema[2]
// store 3 at memo[4]
// f i b ( S )
// f i b ( 4 ) -> lookup meroo[4]
// f i b ( 3 ) -> lookup me[tto[3]
// store 5 at memo[S]