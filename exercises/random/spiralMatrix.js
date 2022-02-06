// Given an m x n matrix, return all elements of the matrix in spiral order
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

// from this we can see that max no of columns = n
// max no of rows = 3
//

// Given that we are at (row, col), where row is the row index, and col is the column index.

// move right: (row, col + 1)
// move downwards: (row + 1, col)
// move left: (row, col - 1)
// move upwards: (row - 1, col)

var spiralOrder = function (matrix) {
  //     Time complexity: O(M . N); Space: O(1)

  let m = matrix.length; //rows
  let n = matrix[0].length; //columns
  let counter = [];
  let startRow = 0;
  let endRow = m - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //   for a row, we loop through columns. For a column, we loop through rows.

    //   adding all the top row
    for (let i = startColumn; i <= endColumn; i++) {
      counter.push(matrix[startRow][i]);
      // this is always in the format: matrix[row][column]
    }
    startRow++;

    // adding all the right column
    for (let i = startRow; i <= endRow; i++) {
      counter.push(matrix[i][endColumn]);
    }
    endColumn--;

    // bottom row
    if (startRow <= endRow) {
      for (let i = endColumn; i >= startColumn; i--) {
        counter.push(matrix[endRow][i]);
      }
    }
    endRow--;

    // start column
    if (startColumn <= endColumn) {
      for (let i = endRow; i >= startRow; i--) {
        counter.push(matrix[i][startColumn]);
      }
    }
    startColumn++;
  }

  return counter;
};
