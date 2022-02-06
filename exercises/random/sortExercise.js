function mergeSort(arr) {
  // return arr.length < 2 ? arr

  if (arr.length < 2) return arr;

  const center = Math.floor(arr.length / 2);

  const left = arr.slice(0, center);

  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // results.push(left[0]);
      results.push(left.shift());
    } else {
      // results.push(right[0]);
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
};

function sortExercise(arr) {
  let sorted = mergeSort(arr);
  return Math.floor(sorted.length / 2);
}

sortExercise([1, 3, 5, 2, 6]);

function quickSort(originalArr) {
  let arr = [...originalArr];

  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor((arr.length - 1) / 2)];

  const left = arr.filter((item) => item < pivot);

  const right = arr.filter((item) => item > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function findMedian(arr) {
  arr = quickSort(arr);

  let median = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i == (arr.length - 1) / 2) {
      median = arr[i];
    }
  }
  // return median;
  console.log(median);
}

findMedian([1, 4, 3, 6, 7]);
