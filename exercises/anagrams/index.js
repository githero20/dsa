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
//   // iterates through and get the number of characters and saves them to an object charMap

// Solution 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
//   // this compares the arrays for both inputs

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

  // / mark the beginning and end of a regular expression.
  //   [ and ] are the start and end of a character set.
  // \w Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_].
  // For example, /\w/ matches "a" in "apple", "5" in "$5.28", "3" in "3D" and "m" in "Émanuel".

  // ^ Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
  // s For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".
  // However, it behaves differently in a range, group, look below:

  // [^xyz]
  // [^a-c]
  // A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets.
  // You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in
  // the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.
  // For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".

  // this means str.replace(/[^\w]/g, "") matches all non-words within the string and replaces them with ""

  // \W means "non-word", as opposed to \w which will match a word.
  // g means it's a global search.
}
//   // this is a helper function that:
//   // converts the strings to a simplified form
//   // splits it and sorts it, then joins it back

module.exports = anagrams;
