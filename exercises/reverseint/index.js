// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My Solution
// function reverseInt(n) {
//   // convert to string
//   // reverse
//   // convert back to integer
//   // math.sign to get the sign of the integer (results in 1, -1)
//   // multiply by reversed to put that sign on the new integer
//   // return it
//   const reversed = parseInt(n.toString().split("").reverse().join(""));
//   const final = Math.sign(n) * reversed;
//   return final;
//   // or create it implicitly and return it, all on one line:
//   //  return ( final = Math.sign(n) * reversed);
// }

// Solution 1
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
