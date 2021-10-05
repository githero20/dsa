// function check(s) {
//     if (s.toLowerCase() > 'a') {
//         console.log(true);
//     }
// }

// check('s');

function gridChallenge(grid) {
  // Write your code here
  // first sort each element in the row
  // then rearrange/sort the row based on the first letter in each word on the row
  // then check each item on the column to see if it is greater than the next
  // grid.sort();
  // let arr = [];

  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("").sort().join("");
    // this sorts every char in each word of the row
    // console.log(grid[i]);
  }

  // this
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] > grid[i + 1][j]) {
        // here j stays the same while i increases.
        // so both elements are on the same col, different rows
        return "NO";
      }
    }
  }
  return "YES";
}
// gridChallenge(['abc','ade','efg']);
gridChallenge(["edc", "ahi", "efg"]);
