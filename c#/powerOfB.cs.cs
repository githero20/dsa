// The following function prints the powers of 2 from 1 through n (inclusive). For example, if n is 4, it would
// print 1,2, and 4, What is its runtime?
// 1 int powers0f2(int n) {
// 2 if (n < 1) {
// 3 return 0;
// 4 } else if (n == 1) {
// 5 System.out,println(l)j
// 6 return lj
// 7 } else {
// 8 int prev = powers0f2(n / 2);
// 9 int curr = prev * 2;
// 10 System,out,println(curr);
// 11 return currj
// 12 }

// this gets a^b
int power(int a, int b)
{
  if (b < 0) {
    return 0;
  } else if (b == 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}