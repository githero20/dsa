// An example of the quicksort function in action
function findMedian(arr) {
  // Write your code here
  // First add your quicksort function

  const quickSort = (originalList) => {
    const list = [...originalList];
    // this creates a function that accepts 'originalList'
    // list is an array formed from the arguments in that list, so we're creating a duplicate of the original.

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

//Sort the array with merge & merge sort
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);
  // this is the pivot or center of the given array

  const left = arr.slice(0, pivot);
  // this creates a new array from the index to just before the pivot element

  const right = arr.slice(pivot);
  // this creates a new array from the pivot to the end of the array

  return merge(mergeSort(left), mergeSort(right));
  // reecursive function, that merges the left and right arrays until they get to the base case (arr.length === 1)
}

function merge(left, right) {
  // to merge two arrays together in a single one

  let results = [];
  // this creates an empty array

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }
    // this checks if the first element in the left array is the less than that of the right (we assume they both are already sorted)
    // then pushes it to the end of the empty results array
    else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
  // creates a combined array of them all
}

const findMedian = (arr) => {
  // creating the findMedian arrow function
  let median = 0;
  arr = mergeSort(arr);
  // first we mergeSort the array, to get a sorted array

  //Bayo's code
  // var medianIndex = arr.length/2 ;
  // if(arr.length % 2 !== 0){
  //   median = arr[med];
  // }else{
  //   median = arr[med] + arr[med + 1];
  // }

  if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i == Math.floor(arr.length / 2)) median = arr[i];
    }
  }

  // return median;
  console.log(median);
};

findMedian([0, 1, 2, 3, 4, 5, 6]);
