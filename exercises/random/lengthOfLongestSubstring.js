// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function (s) {
  //       Using a hash map in JS again lmao
  //   This basically stores the max number of consecutive numbers not equal to another and returns it
  //   so it only upates the 'ans' if it finds a value higher than it. If not, it leaves it as the existing one.
  let n = s.length;
  let ans = 0;
  let i = 0;
  let myMap = new Map();
  //     using 2 counters [i, j]
  for (let j = 0; j < n; j++) {
    if (myMap.has(s.charAt(j))) {
      i = Math.max(myMap.get(s.charAt(j)), i);
      // this always updates to the highest index of the matching char
    }
    ans = Math.max(ans, j - i + 1);
    myMap.set(s.charAt(j), j + 1);
  }
  return ans;
};

// var lengthOfLongestSubstring = function (s) {
//   let sub = [];
//   let max = 0;
//   for (let char of s) {
//     if (sub.includes(char)) {
//       console.log(max);
//       //   return max;
//       sub = [];
//     } else {
//       sub.push(char);
//       max++;
//     }
//   }
// };

// // lengthOfLongestSubstring("abcabcbb");
// lengthOfLongestSubstring("pwwkew"); //doesn't work for this

// var lengthOfLongestSubstring = function(s) {
//     let max_len = 0;
//     let curr = 0;
//     let hash = {};
//     if(s.length < 2) {
//         return s.length;
//     }
//     for(let i = 0; i < s.length;  i++) {
//         if(hash[s[i]] == null) {
//             curr += 1;
//         } else {
//             curr = Math.min(i - hash[s[i]], curr + 1);
//         }
//         max_len = Math.max(max_len, curr);
//         hash[s[i]] = i; //save the index
//     }
//     return max_len;
// };
