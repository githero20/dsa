// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// linearSearch([10, 15, 20, 25, 30], 15) // 1

function linearSearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let counter = -1;
  for (let num of arr) {
    counter++;
    if (num === val) return counter;
  }

  return -1;
}
