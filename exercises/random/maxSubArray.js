// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Using Kadane's Algorithm, but modified a little.
var maxSubArray = function (nums) {
  let maxSubArrVal = nums[0];
  let currSubArrVal = nums[0];

  // start from 1 since we've already used 0
  for (let i = 1; i < nums.length; i++) {
    //   this updates currSubArrVal at any time
    currSubArrVal = Math.max(nums[i], currSubArrVal + nums[i]);
    // with this we get the max currSubArrVal over all iterations
    maxSubArrVal = Math.max(currSubArrVal, maxSubArrVal);
  }
  return maxSubArrVal;
};

// Using recurison
// here we break the array into left, middle, right
// we add all left, add all right, and add a combo of left and right
// we choose the highest value among the three, that's the highest subArray value

var maxSubArray = function (nums) {
  let numsArray = nums;

  findMaxSubArr(0, numsArray.left - 1);
};

var findMaxSubArr = function (left, right) {
  // base case
  if (left > right) {
    // return -Infinity
    return null;
    // means it's an empty array
  }

  let middle = Math.floor((left + right) / 2);
  let leftSum = 0;
  let rightSum = 0;
  let curr = 0;

  //   now for the left part
  for (let i = left; i < middle; i++) {
    curr += numsArray[i];
    leftSum = Math.max(curr, leftSum);
  }

  //   reset curr and begin from the right
  for (let i = right; i > middle; i--) {
    curr += numsArray[i];
    rightSum = Math.max(curr, rightSum);
  }

  // The bestCombinedSum uses the middle element and the best
  // possible sum from each half.
  let bestCombinedSum = leftSum + numsArray[middle] + rightSum;

  // Find the best subarray possible from both halves.
  let leftHalf = findMaxSubArr(left, middle - 1);
  let rightHalf = findMaxSubArr(middle + 1, right);

  return Math.max(bestCombinedSum, Math.max(leftHalf, rightHalf));
};

// JS One-liner
// const maxSubArray = nums =>
//   nums.reduce(
//     ([localMax, globalMax], curr) => [
//       Math.max(curr, localMax + curr),
//       Math.max(curr, localMax + curr, globalMax),
//     ],
//     [-Infinity, -Infinity],
//   )[1];

//   Time O(N), Space O(1)

// // Using brute force, TIMES OUT ON LARGE TEST CASES!
// var maxSubArray = function (nums) {
//   // have to do this incase there are only negative numbers in the array
//   let maxSubArrVal = -Infinity;
//   // first loop through the nums
//   for (let i = 0; i < nums.length; i++) {
//     let currSubArrVal = 0;
//     for (let j = i; j < nums.length; j++) {
//       currSubArrVal += nums[j];
//       maxSubArrVal = Math.max(currSubArrVal, maxSubArrVal);
//     }
//   }
//   return maxSubArrVal;
// };
