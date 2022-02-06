var replaceElements = function (arr) {
  // start from the end
  // Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
  // After doing so, return the array.

  let mx = -1;
  let a = 0;
  let n = arr.length;
  for (let i = n - 1; i >= 0; --i) {
    a = arr[i];
    // this saves the value of arr[i], the current element into a
    arr[i] = mx;
    // this makes the initial value of arr[i] i.e. the last value in the array, mx, which is initially -1
    mx = Math.max(mx, a);
    // this then sets the new mx value to be the larger of a and mx.
    // Then repeats the whole process again
  }
  //   return arr;

  console.log(arr);
};

// arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

replaceElements([17, 18, 5, 4, 6, 1]);
