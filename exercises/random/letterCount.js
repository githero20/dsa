// this function takes a string (sentence) and returns the first word with the greatest number of repeated letters or -1 if no word has a repeated character

// E.g.:
// input: "Hello apple pie"
// Output: "Hello"

// SOLUTION 1
// A nice O(n) solution
function LetterCount(str) {
  let res = "";
  let curr_word = "";
  let charSet = new Set();
  let curr_count = 0;
  let max_count = 0;

  //   we can use the empty spaces to reset the the set, counter, etc. so we only keep count per word
  //   We're basically counting the number of duplicate chars for each word, saving the max count and the word that has it
  //   and returning all that at the end of the loop

  for (char of str) {
    // at the break or reset condition i.e. " "
    if (char === " ") {
      //  this is typically at the end of a word, so we need to compare and then save the count and word itself
      if (curr_count > max_count) {
        max_count = curr_count;
        res = curr_word;
        // this is our base condition i.e. the word with the max count is the result
      }
      //   now we can reset to inital conditions
      curr_count = 0;
      curr_word = "";
      charSet.clear();
    } else {
      curr_word += char;
      if (charSet.has(char)) {
        curr_count += 1;
      } else {
        charSet.add(char);
      }
    }
  }

  //  now we're at the end of the sentence, we need to also compare and save the count of the last word
  if (curr_count > max_count) {
    max_count = curr_count;
    res = curr_word;
    // this is our base condition i.e. the word with the max count is the result
  }

  //   if (max_count <= 1) return -1;
  console.log(res);
  return res;
}

// SOLUTION 2
// My initial solution was to get the maxCharCount of all words and return the word with the greatest count
// Since they have a similar index in their respective arrays, we'll use this common factor to relate them

// we use this to get the max Char Count for each word
function maxCharCount(word) {
  const charMap = {};
  let max = 0;

  // using a hashmap to store all characters and their count
  for (let char of word) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // this iterates through an object, and saves the greatest char count for the word
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
    }
  }

  return max;
}

// O(n2) I think, because of the loop with the helper function in it
function LetterCount(str) {
  // first break into individual substrings and strip all special characters
  let arr = str.replace(/[^\w ]/g, "").split(" ");
  //   this replaces all chars in the string that are not alphabets (latin characters or space), then splits it based on the space and saves it in the array

  //   Now we find the max no of repeated chars in each word and save it
  const res = [];
  for (let word of arr) {
    res.push(maxCharCount(word));
  }

  //   now we get the maxCount out of all of them
  const maxCount = Math.max(...res);
  const index = res.indexOf(maxCount);
  //   this gives us the index of the word with the maximum count

  if (maxCount <= 1) return -1;
  //   i.e. no double letter

  console.log(arr[index]);
  return arr[index];
  //   with this we get the actual word, since it'll have the same index
}

LetterCount("Hello apple pie");
LetterCount("hello goodbye see you tommorrow");

// Python code
// sentence = 'hello goodbye see you tommorrow'
// ans = ''
// dups = set()
// curr_word = ''
// curr_count = 0
// max_count = 0
// for c in sentence:
//     if c == ' ':
//         if curr_count > max_count:
//             max_count = curr_count
//             ans = curr_word
//         curr_count = 0
//         curr_word = ''
//         dups = set()
//     else:
//         curr_word += c
//         if c in dups:
//             curr_count += 1
//         else:
//             dups.add(c)
// if curr_count > max_count:
//     max_count = curr_count
//     ans = curr_word
// print(ans)
