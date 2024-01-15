// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// function letterCombinations(digits) {
//   let res = [];

//   // first, map every number from 2 - 9 to its own letters
//   let digitMap = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };

//   // console.log(digitMap["2"]);

//   // for (let i = 0; i < digits.length; i++) {
//   //   for (let j = 0; j < digitMap[digits[i]].length; j++) {
//   //     res.push(`${digitMap[digits[0]][j]}${digitMap[digits[1]][j]}`);
//   //   }
//   // }

//   // while (digits.length > 0) {

//   // }

//   for (let i = 0; i < digits.length; i++) {
//     let digitArr = digitMap[digits[i]];

//   }

//   console.log(res);

//   return res;
// }

const L = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  let len = digits.length,
    ans = [];
  if (!len) return [];
  const dfs = (pos, str) => {
    if (pos === len) ans.push(str);
    else {
      let letters = L[D[pos]];
      for (let i = 0; i < letters.length; i++) dfs(pos + 1, str + letters[i]);
    }
  };
  dfs(0, "");
  console.log(ans);
  return ans;
};

letterCombinations("23");
