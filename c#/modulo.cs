// returns a % b

int mod(int a, int b) {
  if (b <= 0) {
    return -1;
  }
  int division = a / b;
  return a - division * b;
}
