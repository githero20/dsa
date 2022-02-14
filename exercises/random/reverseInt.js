// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes
// the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function (x) {
  // we can convert to a string, split, reverse it and join it all up.
  let reversed = x.toString().split("").reverse().join("");
  // now we give it the sign of the input
  let final = parseInt(reversed) * Math.sign(x);

  //   this checks for our boundary conditions
  return final > (-2) ** 31 && final < 2 ** 31 - 1 ? final : 0;
};
