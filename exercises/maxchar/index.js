// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//My Solution
// function maxChar(str) {
//   // convert the string to an object with each char as a key, and the frequency of occurrences as a value
//   const characters = {};
//   for (let char of str) {
//     characters[char] = characters[char]++ || 1;
//   }
//   return Math.max(characters.value);
// }

// maxChar('hello');

// Solution 1
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  // this iterates through an array
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
    // this way, once the char is found in the str it is recorded as one
    // and for every addition of that char, the counter increases by 1
  }

  // this iterates through an object
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
    // char is the key
    // charMap[char] is the value
  }

  return maxChar;
}

module.exports = maxChar;
