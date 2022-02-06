// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// My solution, assuming no Unicode chars
// using sort automatically makes my solution at least a O(log)N time complexity also with O(1) space
var isAnagram = function (s, t) {
  // first create a helper function that strips the word to just characters
  const cleanString = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    // this replaces every non alphabet with a ""
  };
  console.log(cleanString(s) === cleanString(t));
  //   return cleanString(s) === cleanString(t);
};

// Hashtable
// https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-valid-anagram
var isAnagram = function (s, t) {
  const ans = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    ans[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    ans[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (ans[i] !== 0) return false;
  }

  return true;
};
// O(n) time, O(1) space

// We will create an array of size 26 and fill it with zeros.
// Next, we'll loop over the characters in the first string and add their count in array.
// For example, if the character is a, we'll increase the count to 1 at position 0 in the array, if it's b, position will be 1 and so on.
// Then, we'll loop over the second string and decrease the character count of all the characters in the array
// After both loops are done, we should have an array with all zeros. If that's not the case, then the strings are not anagrams.

var isAnagram = function (s, t) {
  let myTable = new Array(26).fill(0);
  // this creates an array of just zeros
  //   we've assumed that it's just lowercase characters we're receiving
  for (let i = 0; i < s.length; i++) {
    myTable[s.charCodeAt(i) - 97]++;
    // Next, we are looping over the string s, taking a character, converting it to ASCII and subtracting
    // 97 to ensure our character's numeral representation starts at 0 so that we use it as our array index.
    // 97 here is the ASCII value of a.
    // Then we increase the count at that position in the array

    // myTable[s.charAt(i) - "a"]++;
    // // i.e. if Char(i) = a; then a - a = 0, if b, we get 1.
  }
  for (let i = 0; i < t.length; i++) {
    myTable[t.charCodeAt(i) - 97]--;
    // myTable[t.charAt(i) - "a"]--;
    // We do the same check for the new string with our array, only now we decrease the count by one for each entry
  }

  for (let i = 0; i < 26; i++) {
    if (myTable[i] !== 0) return false;
    //   if any character is not 0, i.e. doesn't match it returns false
  }

  return true;
  //   console.log(true);
};

isAnagram("anagram", "nagaram");
