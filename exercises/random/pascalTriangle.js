// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 1 <= numRows <= 30

var generate = function (numRows) {
  let i = 0;
  let j = 0;
  let res = [];
  for (i = 0; i < numRows; i++) {
    //   this creates an empty array with a number of spaces equal to i + 1, that's the array we're working on everytime
    res.push(Array(i + 1));
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        // we know that the first and last values in any array must be 1
        res[i][j] = 1;
      } else {
        // knowing that the row value is === the value of 2 adjacent entries directly above it i.e. in the previous row
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }
  console.log(res);
  return res;
};

// var generate = function (numRows) {
//   let results = [];
//   //   the first array is always 1, check the constraints.
//   results.push([1]);
//   //   looping through the arrays in the results array that'll hold the values
//   for (let rowNum = 1; rowNum < numRows; rowNum++) {
//     //   we know that the first and last values in any array must be 1
//     // so we create an array for each row with 1 as the first entry
//     let row = [1];
//     let prevRow = results[rowNum - 1];
//     console.log(row, "Row");
//     console.log(prevRow, "prevRow");
//     for (let j = 1; j < numRows; j++) {
//       // knowing that the row value is === the value of 2 adjacent entries directly above it i.e. in the previous row
//       let prevRowVal1 = prevRow[j - 1];
//       let prevRowVal2 = prevRow[j];
//       let rowVal = prevRowVal1 + prevRowVal2;
//       console.log(prevRowVal1, "prevRowVal1");
//       console.log(prevRowVal2, "prevRowVal2");
//       console.log(rowVal, "rowVal");

//       row.push(rowVal);
//     }
//     //   we know that the first and last values in any array must be 1
//     row.push(1);

//     // add that row to the general array
//     results.push(row);
//   }
//   console.log(results);
//   //this is our triangle
// };

generate(5);
