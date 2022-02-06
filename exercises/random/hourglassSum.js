// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// function hourglassSum(arr) {
//   // arr = [i, j, k]
//   //   arr = [1, 1, 1, 0, 0, 0,
//   // 0, 1, 0, 0, 0, 0,
//   // 1, 1, 1, 0, 0, 0,
//   // 0, 0, 2, 4, 4, 0,
//   // 0, 0, 0, 2, 0, 0,
//   // 0, 0, 1, 2, 4, 0]

//   // Write your code here
//   //   I'm going to write an array that checks all the elements in the array, sums it up.
//   let h = [];
//   let s = [];
//   const reducer = (prev, curr) => prev + curr;
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = 0; j < arr.length - 2; j++) {
//       // the double for loop is necessary because we're dealing with a 2D array.
//       // the '-2' is necessary because j+2 !> arr.length
//       //  we're saving a 2d 3x3 matrix into the array
//       //  i+- = movement along the horizontal axis
//       //  j+- = movement along the vertical axis

//       s.push(
//         arr[i][j],
//         arr[i + 1][j],
//         arr[i + 2][j],
//         arr[i + 1][j + 1],
//         arr[i][j + 2],
//         arr[i + 1][j + 2],
//         arr[i + 2][j + 2]
//       );
//       //   one hourglass
//       h.push(s.reduce(reducer));
//       //   this sums each hourglass array and pushes it into an array h.
//     }
//   }
//   //   console.log(h);
//   return Math.max(h);
// }

function hourglassSum(arr) {
  // we could set this to 3 given the problems constraings, but this allows changes
  let maxX = 3; // + (arr[0].length % 3) //this is because it can't pass 3 elements on a row in an hourglass
  let maxY = 3; // + (arr.length % 3)
  let total = -Infinity; // has to be -64, but

  // begin at y == 0
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      // sum the top of hourglass
      let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

      // get the middle of hourglass
      sum += arr[y + 1][x + 1];

      // sum the bottom of hourglass
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

      // don't store result to keep space complexity down
      if (total < sum) total = sum;
    }
  }

  return total;
}
