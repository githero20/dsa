// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (nums, target) {
  // Conditions
  // 1. the target exists within the nums array
  // 2. the target is smaller than the first number in the nums array
  // 3. the target is greater than the last number in the nums array
  // 4. the target does not exist in the array, but it is within the range of number values

  // Using Binary Search
  // P.S. Search the binarySearch.js file in the folder

  // lo, mid, hi are all indices of values in the array, not the actual values
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (mid === target) {
      return mid;
    } else if (mid > target) {
      lo = mid + 1;
    } else if (mid < target) {
      hi = mid - 1;
    }
  }

  return -1;
};
