var twoSum = function (nums, target) {
  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  // You may assume that each input would have exactly one solution, and you may not use the same element twice.
  // You can return the answer in any order.
  // .
  //   Using a hashmap in js, lmao
  //   Time complexity O(n), space is O(n), we're more concerned with time complexity than space
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let diff = target - curr;
    if (myMap.has(diff)) {
      // checks if the map has the value diff
      let res = [myMap.get(diff), i];
      // gets the key(index) of the value, and returns it with the index i
      console.log(res);
      // return res;
    } else {
      myMap.set(curr, i);
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);

const twoSumII = function (numbers, target) {
  // Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
  // find two numbers such that they add up to a specific target number.
  // Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
  // Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
  // The tests are generated such that there is exactly one solution. You may not use the same element twice.

  // Using a hashmap again
  // let myMap = new Map();
  // // let res = [];
  // for (let j = 0; j < numbers.length; j++) {
  //   let diff = target - numbers[j];
  //   if (myMap.has(diff)) {
  //     let res = [myMap.get(diff) + 1, j + 1];
  //     // this gets the value (i.e. index) of diff
  //     return res;
  //     // we're returning res inside the loop because we know there's only one answer to this question in the array.
  //   }
  //   myMap.set(numbers[j], j);
  //   // this sets a key value pair, with the number as the key and its index as the value
  // }

  // Since we know that it is sorted l-r i.e. non-decresing order, we can use a Binary Search tree (BST).
  let left = 0;
  let right = nums.length - 1;
  let tempSum = 0;
  while (left < right) {
    tempSum = numbers[left] + numbers[right];
    if (tempSum === target) {
      //   console.log([left, right]);
      return [left, right];
    } else if (tempSum > target) {
      right--;
    } else {
      left++;
    }
  }
  //   return [-1, -1];
  //   Time complexity O(n), space is O(1), probably the better solution for this problem because it is ALREADY SORTED.
  // .
};
