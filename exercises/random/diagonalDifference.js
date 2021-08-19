function diagonalDifference(arr) {
  let minor = 0;
  let major = 0;

  for (let i = 0; i < arr.length; i++) {
    minor += arr[i][i];
    major += arr[i][arr.length - 1 - i];
  }

  return Math.abs(major - minor);
  // console.log(Math.abs(major - minor));
}

// function diagonalDifference(arr) {
//     // Write your code here
//     let minorAxis = 0;
//     let majorAxis = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i == j) {
//                 minorAxis += arr[i, j];
//             } else if (j == (arr.length - 1 - i)) {
//                 majorAxis += arr[i,j];
//             }
//         }
//     }

//     return Math.abs(majorAxis - minorAxis);

// }

// diagonalDifference(
//     [1 2 3
//     4 5 6
//     9 8 9])
