// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }
//   // this compares the arrays for both inputs

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char]++ || 1;
//   }

//   return charMap;
// }
//   // this is a helper function that:
//   // converts the strings to a simplified form
//   // iterates through and get the number of characters and saves them to an array charMap

// Solution 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
//   // this compares the arrays for both inputs

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
//   // this is a helper function that:
//   // converts the strings to a simplified form
//   // splits it and sorts it, then joins it back

module.exports = anagrams;
