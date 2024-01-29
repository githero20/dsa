// // This is BST simplified
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (right > left) {
//     let sum = arr[left] + arr[right];

//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum < 0) {
//       // this only works because the array was previously sorted
//       left++;
//     } else if (sum > 0) {
//       right--;
//     }
//   }
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let a = 0;

  // starting the count from the second element
  // because we are tracking the first element with a, above
  for (let b = 1; b < arr.length; b++) {
    if (arr[a] !== arr[b]) {
      // if it is unique, replace the previous one with it
      // if the two values are different
      // i.e. at this instant, both values are unique
      // then increase counter, replace their positions and keep goings
      a++;
      arr[a] = arr[b];
    }
  }

  return i + 1;
}
