// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  //match is used for regexp
  //If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
  //i flag - case insensitive
  return matches ? matches.length : 0;
  // matches creates an array of the results, but if no result found it returns null
  // if matches is truthy, it returns the array length, if falsy (null) it will return 0
  // i'm just facinated that this doesn't double count the characters, i.e. two occurrences of the same character
}

// function vowels(str) {
//   const list = ["a", "e", "i", "o", "u"];
//   let n = 0;

//   for (let char of str.toLowerCase()) {
//     if (list.includes(char)) {
//       n++;
//     }
//   }
//   return n;
// }

module.exports = vowels;
