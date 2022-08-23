// // Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

const findAnagrams = (s, p) => {
  const res = [];
  const myCharMap = {};

  // fill the myCharMap;
  for (let char of p) {
    if (char in myCharMap) {
      myCharMap[char]++;
    } else {
      myCharMap[char] = 1;
    }
  }

  // use 2 sliding window pointers, left and right
  // let maxCount be the length of the check string
  let left = 0;
  let right = 0;
  let count = p.length;

  // slide from the right
  while (right < s.length) {
    // if char exists in the anagram check and hasn't been fully used, i.e. > 0
    // then subtract and subtract the count, means we're still counting
    if (myCharMap[s[right]] > 0) {
      count--;
    }

    // this means it is not greater than 0, so we don't reduce the count, we just reduce
    // the value in the charMap and move the right left
    myCharMap[s[right]]--;
    right++;

    if (count === 0) {
      res.push(left);
      // since count is 0, means we just reached the beginning of an anagram. Since we'e counting from the right
    }

    // Now for the left side
    if (right - left === p.length) {
      if (myCharMap[s[left]] >= 0) count++;

      // if the character exists but is not greater than 0.
      // we increment it's value and move the left slider forward
      myCharMap[s[left]]++;
      left++;
    }
  }

  console.log(res);
  return res;
};

findAnagrams("cbaebabacd", "abc");

//   Explanation below
// https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/1025753/Simplest-Sliding-Window-Solution-O(N)-Heavily-Commented-JavaScript
// const findAnagrams = (s, p) => {
//   // initialize output array to be returned at the end and neededChars object to store the chars in p.
//   const output = [];
//   const neededChars = {};

//   // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
//   for (let char of p) {
//     if (char in neededChars) {
//       neededChars[char]++;
//     } else neededChars[char] = 1;
//   }

//   // initialize window pointers and the total number of chars needed to form an anagram.
//   let left = 0;
//   let right = 0;
//   let count = p.length;

//   // start sliding the window
//   while (right < s.length) {
//     // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0),
//     // then decrease the count which is the total number of chars that are needed and that still haven't been found.
//     if (neededChars[s[right]] > 0) count--;

//     // decrease the needed amount for the current char and move the window's right end one step forward.
//     neededChars[s[right]]--;
//     right++;

//     // if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
//     if (count === 0) output.push(left);

//     // at first, the window will increase its length by taking steps forward with its right end.
//     // after the window length reaches p's length for the first time,
//     // the window will start moving forward like a caterpillar with the left end moving first.
//     if (right - left == p.length) {
//       // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
//       if (neededChars[s[left]] >= 0) count++;

//       // the lines below are the most important to understand:
//       // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string,
//       // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
//       neededChars[s[left]]++;
//       left++;
//     }
//   }
//   return output;
// };

// https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92007/Sliding-Window-algorithm-template-to-solve-all-the-Leetcode-substring-search-problem.

// var findAnagrams = function (s, p) {
//   let res = [];
//   if (p.length > s.length) return res;

//   let charMap = new Map();

//   //   assuming p is the base anagram phrase and does not repeat any characters, i.e. ab, not aba
//   //   for (let i = 0; i < p.length; i++) {
//   //     charMap.set(p[i], 1);
//   //   }
//   for (let char of p) {
//     if (charMap.has(char)) {
//       charMap.set(char, charMap.get(char) + 1);
//     } else {
//       charMap.set(char, 1);
//     }
//     // charMap.set(char, )
//   }

//   let counter = charMap.size();

//   let begin,
//     end,
//     head = 0;
//   let length = Infinity;

//   for (let i = 0; i < s.length; i++) {
//     // if (charMap.has(s[i])) {
//     charMap.delete(s[i]);
//     // }
//     if (charMap.size === 0) {
//       res.push[i];
//     }
//   }
// };

// public class Solution {
//     public List<Integer> findAnagrams(String s, String t) {
//         List<Integer> result = new LinkedList<>();
//         if(t.length()> s.length()) return result;
//         Map<Character, Integer> map = new HashMap<>();
//         for(char c : t.toCharArray()){
//             map.put(c, map.getOrDefault(c, 0) + 1);
//         }
//         int counter = map.size();

//         int begin = 0, end = 0;
//         int head = 0;
//         int len = Integer.MAX_VALUE;

//         while(end < s.length()){
//             char c = s.charAt(end);
//             if( map.containsKey(c) ){
//                 map.put(c, map.get(c)-1);
//                 if(map.get(c) == 0) counter--;
//             }
//             end++;

//             while(counter == 0){
//                 char tempc = s.charAt(begin);
//                 if(map.containsKey(tempc)){
//                     map.put(tempc, map.get(tempc) + 1);
//                     if(map.get(tempc) > 0){
//                         counter++;
//                     }
//                 }
//                 if(end-begin == t.length()){
//                     result.add(begin);
//                 }
//                 begin++;
//             }

//         }
//         return result;
//     }
// }
