// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// PREFERRED SOLUTION
var topKFrequent = function (words, k) {
  const myMap = {};
  for (let i = 0; i < words.length; i++) {
    myMap[words[i]] = myMap[words[i]] + 1 || 1;
    // same as:
    // if (myMap[word]) {
    //       myMap[word]++;
    //     } else {
    //       myMap[word] = 1;
    //     }
  }
  const sorted = Object.keys(myMap).sort((a, b) => {
    if (myMap[b] === myMap[a]) {
      return a > b ? 1 : -1;
      //   if the counts (i.e. values) of the map keys are the same, the line above sorts the keys alphabetically
    }
    return myMap[b] - myMap[a];
    // else it just sorts them based on their counts
  });
  return sorted.slice(0, k);
};

// var topKFrequent = function (words, k) {
//   let hash = {};
//   for (let word of words) {
//     hash[word] = hash[word] + 1 || 1;
//   }
//   let result = Object.keys(hash).sort((a, b) => {
//     let countCompare = hash[b] - hash[a];
//     if (countCompare == 0) {
//         // this checks if they have the same count
//       return a.localeCompare(b);
//       // a.localCompare(b) returns -1 if b > a, we can use this to sort a before b
//     }
//     else {
//       return countCompare;
//     }
//   });
//   //   this sorts it in descending order, then also in lexographical order

//   return result.slice(0, k);
// };

// var topKFrequent = function (words, k) {
//   // My solution, using hashmaps, (doesn't cover all test cases)
//   let strMap = new Map();
//   let res = [];

//   for (let word of words) {
//     if (strMap[word]) {
//       strMap[word]++;
//     } else {
//       strMap[word] = 1;
//     }
//   }

//   let sorted = Object.entries(strMap)
//     .sort((a, b) => b[1] - a[1])
//     .sort((a, b) => {
//       if (a[1] === b[1]) {
//         //  this confirms if the two arrays have the same frequency
//         return a[0].charCodeAt(0) - b[0].charCodeAt(0); //  this sorts them in lexographical order
//       }
//     })
//     .sort((a, b) => {
//       if (a[1] === b[1]) {
//         //  this confirms if the two arrays have the same frequency
//         return a[0].length - b[0].length; //  this sorts them based on length
//       }
//     });
//   //   this sorts it in descending order, then also in lexographical order

//   //   console.log(sorted);

//   // this prints it
//   for (let w = 0; w < k; w++) {
//     res.push(sorted[w][0]);
//     // console.log(sorted[w][0]);
//   }
//   //   console.log(res);
//   return res;
// };

topKFrequent(
  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
  4
);
topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);
