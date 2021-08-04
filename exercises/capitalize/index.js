// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   // this splits the str based on each space provided within it, basically breaking it into separate words
//   // then converts the first index character to uppercase, slices the rest of the words in the str array and then joins it back into an array called 'words'

//   // this joins the words together with a space between each separate word
//   return words.join(" ");
// }

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
  //this checks to see if the previous char is a space, if it is then it makes the next one uppercase
}

module.exports = capitalize;
