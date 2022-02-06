// to insert an element into an array
// this doesn't seem to work

const insertArray = (arr, length, position) => {
  // insert the array, length of the array, and the position of the insertion
  for (let i = length; i >= position; i--) {
    arr[i + 1] = arr[i];
    // this shifts the array by one
  }
  //   return arr;
  console.log(arr);
};

insertArray([1, 2, 3, 4, 5, 0, 0], 5, 0);
