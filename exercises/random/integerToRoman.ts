// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones

// https://www.youtube.com/watch?v=ohBNdSJyLh8

var intToRoman = function (num: number): string {
  // Roman numerals generally work with the larger value first i.e. MX, VII etc.
  // However, there are situations where a smaller value may come first e.g. IV, XC etc.
  //   So we'll update the table to include the special situations

  //   romans = {
  //     I: 1,
  //     IV: 4,
  //     V: 5,
  //     IX: 9,
  //     X: 10,
  //     XL: 40,
  //     L: 50,
  //     XC: 90,
  //     C: 100,
  //     CD: 400,
  //     D: 500,
  //     CM: 900,
  //     M: 1000,
  //   };
  // Not using a hashmap because we need to loop through it

  const romans: (string | number)[][] = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ];
  //   The plan is to loop through the Romans Arr, dividing the number by each entry.
  // where the remainder.floor is > 1, then I'd add the roman equivalent.
  let res = "";
  for (let arr of romans.reverse()) {
    // First we reverse it, so we can loop in descending order
    let sym: string = arr[0].toString();
    let val: number = Number(arr[1]);

    let count = Math.floor(num / val);
    // we also round it down to the nearest whole number
    if (count) {
      // for (let i = 0; i < count; i++) res += sym;
      // change the for loop to repeat
      res += sym.repeat(count);
      num = num % val;
    }
  }
  console.log(res);
  return res;
};

intToRoman(54);
intToRoman(10);
intToRoman(40);
intToRoman(120);
