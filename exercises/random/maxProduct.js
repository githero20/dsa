// https://leetcode.com/problems/maximum-product-of-word-lengths/discuss/489956/JavaScript-with-bitwise-explanation


// 318. Maximum Product of Word Lengths
// Medium

// 1744

// 95

// Add to List

// Share
// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

// Example 1:

// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:

// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
// Example 3:

// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.

// Constraints:

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

const checkUniqueStrings = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) return false;
  }
  return true;
};

var maxProduct = function (words) {
  // First, get that the words don't share letters of the alphabet
  // then multiply them by each other until you get the highest length.

  // BRUTE FORCE
  //   the plan is to compare every word in the array with the first word, and if unique store the max value
  //   then move to the next word and compare with all the rest.
  //   Do this until you get the max product value
  let maxVal = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let x = words[i],
        y = words[j];

      if (checkUniqueStrings(x, y)) {
        maxVal = Math.max(maxVal, x.length * y.length);
      }
    }
  }

  return maxVal;
};

// There's a bitwise solution but ...
