// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
// function reverse(str) {
//   //   const arr = str.split("");
//   //   // turn it to an Array
//   //   arr.reverse("");
//   //   // reverse it
//   //   return arr.join("");
//   //   //turn it back to a string

//   //clean up the code
//   return str.split("").reverse().join("");
// }

// SOLUTION 2
// function reverse(str) {
//   let reversed = "";
//   //this creates a 'reversed' string

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   //this iterates through each character of the array, then adds the iterated character to the empty 'reversed' array
//   //new for loop syntax introduced with ES 2015, the syntax is perfect for +1 increments with a definite end

//   return reversed;
// }

// SOLUTION 3
function reverse(str) {
  //   return str.split("").reduce((reversed, character) => {
  //     return character + reversed;
  //   }, "");

  // condensed to ES6
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
  // node inspect index.js to run debugger mode
  // press c to continue execution
  // type repl to input code
}

reverse("peta");

module.exports = reverse;
