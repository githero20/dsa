// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My solution
// function palindrome(str) {
//   let rev = "";
//   for (let char of str) {
//     rev = char + rev;
//   }
//   if (rev === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 1
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// Solution 2
function palindrome(str) {
  // turn the string to an array
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
    //this checks the character against it's counterpart on the other side of the array
    // i - index of array, -1 because we need to subtract one from the total length of the array.
  });
}

module.exports = palindrome;
