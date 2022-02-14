// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// BFS
// const wordBreak = (s, wordDict) => {
//   if (wordDict == null || wordDict.length === 0) return false;
//   const set = new Set(wordDict);

//   // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
//   // After 'cats' and 'ca', it will become 'andog', 'tsandog'
//   // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
//   const visited = new Set();
//   const q = [0];

//   while (q.length) {
//     const start = q.shift();

//     if (!visited.has(start)) {
//       for (let end = start + 1; end <= s.length; end++) {
//         if (set.has(s.slice(start, end))) {
//           if (end === s.length) return true;
//           q.push(end);
//         }
//       }
//       visited.add(start);
//     }
//   }
//   return false;
// };

// Dynamic Programming
var wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;

  //     turn the broken words into a set, to also help prevent repetition
  const set = new Set(wordDict);
  //     create an array and fill it with false, it will only turn true if it passes
  const dp = Array(s.length + 1).fill(false);
  //     set the first array element to true, this will stand for the word we've been given 's'
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end);
      //         this is the logic, it only updates the boolean at the index value of that element
      if (dp[start] === true && set.has(w)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

// e.g.
// 'leetcode'
// ['leet', 'code']
//
// i = 1 j = 0 l
// dp = [true, false, false, false, false, false, false, false, false]
// i = 2 j = 0 le
// i = 2 j = 1  e
// dp = [true, false, false, false, false, false, false, false, false]
// i = 3 j = 0 lee
// i = 3 j = 1  ee
// i = 3 j = 2   e
// dp = [true, false, false, false, false, false, false, false, false]
// i = 4 j = 0 leet
// match
// dp = [true, false, false, false, true, false, false, false, false]
//
// i = 5 j = 0 leetc
// i = 5 j = 1  eetc
// i = 5 j = 2   etc
// i = 5 j = 3    tc
// i = 5 j = 4     c
// dp = [true, false, false, false, true, false, false, false, false]
// i = 6 j = 0 leetco
// i = 6 j = 1  eetco
// i = 6 j = 2   etco
// i = 6 j = 3    tco
// i = 6 j = 4     co
// i = 6 j = 5      o
// dp = [true, false, false, false, true, false, false, false, false]
// i = 7 j = 0 leetcod
// i = 7 j = 1  eetcod
// i = 7 j = 2   etcod
// i = 7 j = 3    tcod
// i = 7 j = 4     cod
// i = 7 j = 5      od
// i = 7 j = 6       d
// dp = [true, false, false, false, true, false, false, false, false]
// i = 8 j = 0 leetcode
// i = 8 j = 1  eetcode
// i = 8 j = 2   etcode
// i = 8 j = 3    tcode
// i = 8 j = 4     code
// match
// dp = [true, false, false, false, true, false, false, false, true]
