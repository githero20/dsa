// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
    // this is the base case, and where the function will end i.e. max no of rows
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
    // here, when the stair has reached the maximum length per row (n) from below
    // this iterates through the rows, and prints the stair value for each row
    // then returns the steps function again on a new row

    // this prints the stair at the end of each row (i.e. when the length of the row has reached n)
    // it then returns the same function for the next row (in this case row + 1)
  }

  const add = stair.length <= row ? "#" : " ";
  // this is where the code is
  // this creates a vaiable add.
  // this variable takes a # as long as the length is less/equal to the row value; if not, it enters a space value
  steps(n, row, stair + add);
  //now this runs the step function again, only with a new value of stair
}

module.exports = steps;
// I no too grasp this recursion solution tbh

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
// this creates an empty variable, stair
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
// illustrate this for more clarification
// this iterates through the columns in a row, with n-1 equal to the max column index space and n, the max. no of columns (only because n= max no of columns too)
// this puts a unit of # to the stairs variable on each column space, only if the column no is less than the row no,
// if not, it puts in a ' ';
//     }
//
//     console.log(stair);
//this prints the stair variable for every row
//   }
// }

// module.exports = steps;

// NOW FOR RIGHT ALIGNED STAIRS
for (let i = 1; i <= n; i++) {
  console.log("#".repeat(i).padStart(n, " "));
  // this repeats an output of #, i number of times;
  // then it fills up the rest of the spaces in front with the ' ' character, until the total no of characters is n
  // then it moves to the next line
}
// if there's a padstart, then there's a padend

// NOT WORKING!!

// // we just loop from the opposite direction
// function steps(n) {
//   for (let row = n; row > 0; row--) {
//     let stair = '';
//     // for the rows, printf is under
//     for (let column = n; column > 0; column--) {
//       // for each column on a row
//       if (column >= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//     // prints each row
//   }
// }

// steps(5);

// // RECURSIVE SOLUTION
// function steps (n, row= n, stair= '') {
//   //first the base case
//   if (row === 0) {
//     return;
//   }

//   if (stair.length === n) {
//     console.log(stair);
//     return steps(n, row - 1);
//     // this prints the stair at the end of each row (i.e. when the length of the row has reached n)
//     // it then returns the same function for the next row (in this case row - 1)
//   }

//   const add = stair.length >= row ? '#' : ' ';
//   // just like in the for loop above, this creates an empty variable that adds a # when the stair.length >= row (n)
//   // if it does not, it includes a ' ', until it gets to the end of the row
//   // how do I manage the first iteration? so it prints # instead of ' ' the first time then ' ' the subsequent times.

//   steps(n, row, stair + add);
//   // this calls the function again, adding the new variable to stair
//   // the length of the new stair variable being equals to n, is what we use to check that it has reached the end of the row and therefore move to the next row (check above)

// }
// steps(5);
