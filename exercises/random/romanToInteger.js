// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// https://www.youtube.com/watch?v=3jdxYj3DD98

var romanToInt = function (s) {
  // using a char map
  romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  // Roman numerals generally work with the larger value first i.e. MX, VII etc. In that situation, you just add the values of each character
  // However, there are situations where a smaller value may come first e.g. IV, XC etc. In that situation, you subtract that smaller value from the bigger one.
  // (note: it is usually just a singular smaller value)

  for (let char = 0; char < s.length; char++) {
    if (romans[s[char]] < romans[s[char + 1]]) {
      res -= romans[s[char]];
    } else {
      res += romans[s[char]];
    }
  }

  return res;
};
