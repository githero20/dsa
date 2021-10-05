function superDigit(n, k) {
  // Write your code here
  // FIrst secure your base case
  // then using recursion call it

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum = sum + parseInt(n[i]);
  }
  if (sum.toString().length > 1) {
    sum = superDigit(sum.toString(), 1);
  }
  if (k > 1) {
    sum *= k;
    sum = superDigit(sum.toString(), 1);
  }
  return sum;
}
