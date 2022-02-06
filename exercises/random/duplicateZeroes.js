// var duplicateZeros = function (arr) {
//   // for (let i = arr.length; i>=0; )
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === 0) {
//       arr[i + 1] = 0;
//     }
//     // return arr;
//   }
//   console.log(arr);
// };
// [1,0,2,3,0,4,5,0]
// [1,0,0,2,3,0,0,4]

var duplicateZeros = function (arr) {
  let tempStr = "";
  //   Create a temporary string and iterate through the original arr
  // Reproduce the str and add an additional zero to corresponding zeros
  // Replace the original arr with the values within the temporary arr

  for (let i = 0; i < arr.length; i++) {
    tempStr += arr[i] + " ";
    if (arr[i] === 0) {
      tempStr += "0 ";
    }
  }

  let tempArr = tempStr.split(" ").slice(0, arr.length);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(tempArr[i]);
  }
  // console.log(arr);
  return arr;
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
