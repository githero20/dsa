// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Input: s = "loveleetcode"
// Output: 2

// Using a hashMap to store the no of occurrences of each char
var firstUniqChar = function (s) {
  let myMap = new Map();

  for (let char of s) {
    if (myMap[char]) {
      myMap[char]++;
    } else {
      myMap[char] = 1;
    }
  }
  console.log(myMap);

  //   now we loop through that hashmap, and use the key value pair to get the index
  for (let i = 0; i < s.length; i++) {
    if (myMap[s[i]] === 1) {
      console.log(i);
      return i;
    }
  }

  return -1;
};

firstUniqChar("leetcode");
