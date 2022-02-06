// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
// Included Quicksort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  [98, 23, 190];
  if (arr.length === 1) {
    return arr;
    // array already at its smallest size
  }

  const center = Math.floor(arr.length / 2);
  // this decides the center point of the array.
  // because of 0 index number, this is usually the index after the actual center point

  const left = arr.slice(0, center);
  // this creates an array of the values from 0 index to just before center
  // this way we get the actual first half values

  const right = arr.slice(center);
  // this creates an array of the values from 0 index to just before center

  return merge(mergeSort(left), mergeSort(right));
  // recursion in all its glory

  // this (mergeSort) breaks the array into halves until it gets to the smallest arr.size (1)
  // the merge function then sorts it and joins it together
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
    // keeps on comparing the first values of both arrays and combining them into the results array until one of the arrays is empty
  }

  return [...results, ...left, ...right];
  // this creates a new array from the contents of the arrays listed.
  // ES 2016
}

// module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// But before going forward with the Quick sort, selecting the pivot element plays a major role.
// If you select the first element as the pivot element, then it gives worst performance in the sorted array.
// So, it is always advisable to pick the middle element (length of the array divided by 2) as the pivot element and we do the same.

const quickSort = (originalList) => {
  const list = [...originalList];

  if (list.length < 2) {
    return list;
  }

  const pivot = list[Math.floor((list.length - 1) / 2)];
  // this sets the pivot to the median of the array

  const smaller = list.filter((item) => item < pivot);
  // this creates a new array (smaller), made up of every item in the list array that meets the condition (item < pivot)
  // we're effectively filtering all the elements smaller than the pivot to a separate array.

  const bigger = list.filter((item) => item > pivot);
  // we're effectively filtering all the elements bigger than the pivot to a separate array.

  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
  //this calls quickSort for the smaller/bigger again, a recursive function until they're both all sorted.
  // this also uses a spread operator, to add the items to the array, one by one, not chunks of arrays.
};
// seems like quick sort does not allow same number values i.e. [1, 2, 2, 3] = [1, 2, 3]

// You can also use a for loop instead of filter, next time I'll use this in a question

// An example of the quicksort function in action
function findMedian(arr) {
  // Write your code here
  // First add your quicksort function

  if (arr.length % 2 !== 0) {
    let median = 0;
    // arr.sort();
    arr = quickSort(arr);
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (i == (arr.length - 1) / 2) {
        median = arr[i];
      }
      // this determines the middle index position then equates the value to the median var
    }
    return median;
    // console.log(median);
  } else {
    return;
  }
}

findMedian([0, 1, 2, 3, 4, 5, 6]);

//Counting Sort
// Given a list of integers, count and return the number of times each value appears as an array of integers.
function countingSort(arr) {
  // Write your code here
  // first create your empty frequency array
  // I need to get an array of only zeros from i = 0 to i = 99
  let result = new Array(100).fill(0);
  // this creates a new array with length of 100 (last element is 99)
  // and fills it with 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (j == arr[i]) {
        result[j]++;
      }
    }
  }
  //this increments the result array indices that match the original array values
  return result;
  // from this you can get the max number of times a value appears
  // console.log(result);
}

// countingSort([1,3,45,2,1]);
