var validMountainArray = function (arr) {
  // Let's walk up from left to right until we can't: that has to be the peak. We should ensure the peak is not the first or last element. Then, we walk down. If we reach the end, the array is valid, otherwise its not.
  let i = 0;
  let L = arr.length;

  //     Walking up
  while (i + 1 < L && arr[i] < arr[i + 1]) {
    i++;
  }

  // now, peak can't be first or last
  if (i === 0 || i === L - 1) {
    // return false;
    console.log(false);
  }

  // Walking down, if we get to the end then it is valid
  while (i + 1 < L && arr[i] > arr[i + 1]) {
    i++;
  }
  //   return i == L - 1;
  console.log(i == L - 1);
  //     what matters is the first value returned, as long as it's true then it is true
};

validMountainArray([0, 3, 2, 1]);
