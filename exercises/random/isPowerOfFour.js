// My solution

var isPowerOfFour = function (n) {
  for (let i = 0; i < 1000; i++) {
    if (n === Math.pow(4, i)) return true;
  }
  return false;
};
