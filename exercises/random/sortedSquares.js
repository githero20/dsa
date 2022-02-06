// const quickSort = (arr) => {
//   list = [...arr];

//   if (list.length < 2) return list;

//   const pivot = arr[Math.floor((arr.length - 1) / 2)];

//   const left = arr.filter((num) => num < pivot);
//   const right = arr.filter((num) => num > pivot);

//   return [...quickSort(left), pivot, ...quickSort(right)];
// };
// seems like quick sort does not allow same number values i.e. [1, 2, 2, 3] = [1, 2, 3]

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

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

var sortedSquares = function (nums) {
  let result = [];
  let value = 0;
  for (let num of nums) {
    value = num ** 2;
    result.push(value);
  }
  // now that we have an array of the square of the numbers, we need to sort it.
  // console.log(result);
  // console.log(mergeSort(result));
  return mergeSort(result);
};

// sortedSquares([-4, -1, 0, 3, 10]);
sortedSquares([-7, -3, 2, 3, 11]);
// [4,9,9,49,121]
// sortedSquares([0, 1, 9, 16, 100]);
// [0,1,9,16,100]
