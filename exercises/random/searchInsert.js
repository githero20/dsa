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
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  // The target does not exist

  // 2. the target is smaller than the first number in the nums array
  if (target < nums[0]) {
    return 0;
  }

  // 3. the target is greater than the last number in the nums array
  if (target > nums[length - 1]) {
    return length;
  }

  // 4. the target does not exist in the array, but it is within the range of number values
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target - 1) {
      return i + 1;
    }
  }
};
