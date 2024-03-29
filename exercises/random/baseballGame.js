// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:

// Input: ops = ["1"]
// Output: 1

// https://leetcode.com/problems/baseball-game/

var calPoints = function (ops) {
  let res = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops.length <= 1) {
      return ops;
    }

    if (ops[i] == "+") {
      res.push(res[res.length - 1] * res[res.length - 2]);
    } else if (ops[i] == "D") {
      res.push(res[res.length - 1] ** 2);
    } else if (ops[i] == "C") {
      res.pop();
    } else {
      res.push(parseInt(ops[i]));
    }
  }

  //   let sum = 0;

  //   while (res.length > 0) {
  //     sum += res.pop();
  //   }

  //   return sum;

  console.log(res, "res array");
  const final = res.reduce((prev, curr) => prev + curr);
  console.log(final, "res sum");
  return final;
};
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]);
calPoints(["1"]);
