// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

//leetcode.com/problems/binary-search/discuss/1322419/5-variations-of-Binary-search-(A-Self-Note)

var search = function (nums, target) {
  // For a BS, we divide the sorted array into 2. Then pick a median value and begin searching from there.
  //   similar to quick sort
  let lowIndex = 0;
  let highIndex = nums.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    // This is better than (low + high) / 2 as it eliminates integer overflow (which occurs in some cases)

    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] < target) {
      // this means we have to increase the midIndex's value. We do this by raising the lowIndex
      lowIndex = midIndex + 1;
    } else if (nums[midIndex] > target) {
      highIndex = midIndex - 1;
      // this updates the value for high Index and thus the val of midIndex
    }
  }

  return -1;
};
