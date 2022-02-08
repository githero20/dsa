// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// var frequencySort = function (s) {
//   // create a charMap
//   let charMap = {};

//   // let myStr = "";
//   // not appending to the end of a string, because it always replaces the string with the new one
//   // essentially a loop i.e. causing a time complexity of O(n)2

//   let res = [];

//   for (let char of s) {
//     if (charMap[char]) {
//       charMap[char]++;
//       //   this updates the value of the character in the map by 1
//     } else {
//       charMap[char] = 1;
//       //   this adds it to the map and makes the value 1.
//     }
//   }

//   console.log(charMap);

//   // this sorts it
//   let sorted = Object.entries(charMap);
//   // this gives an array of key, value pairs i.e. [[a, 1], [b,2]]
//   // sorted.sort((a,b) => a[1] - b[1]) // this sorts in ascending order
//   sorted.sort((a, b) => b[1] - a[1]); // this sorts in descending order
//   console.log(sorted);

//   // now to print the sorted;
//   for (let arr of sorted) {
//     let count = arr[1];
//     for (let i = 1; i <= count; i++) {
//       res.push(arr[0]);
//     }
//   }
//   console.log(res);

//   let str = res.join("").toString();
//   console.log(str);
//   // return str;
// };
// Time complexity: O(n2 + klogk)
// Space complexity: O(n)

// Runtime: 88 ms, faster than 91.51% of JavaScript online submissions for Sort Characters By Frequency.

var frequencySort = function (s) {
  let charMap = new Map();
  let res = [];

  for (let char of s) {
    if (charMap[char]) {
      charMap[char]++;
      //   this updates the value of the character in the map by 1
    } else {
      charMap[char] = 1;
      //   this adds it to the map and makes the value 1.
    }
  }

  let sorted = Object.entries(charMap).sort((a, b) => b[1] - a[1]);
  // this sorts in descending order

  for (let arr of sorted) {
    let count = arr[1];
    for (let i = 1; i <= count; i++) {
      res.push(arr[0]);
    }
  }

  let str = res.join("").toString();
  return str;
};

frequencySort("abcccccccd");
frequencySort("tree");
