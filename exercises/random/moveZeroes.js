// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let lastCount = 0;

  // this fills the entire array with the non-zero numbers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastCount] = nums[i];
      lastCount++;
    }
  }
  console.log(nums);
  // now to fill the rest with zeros
  for (let i = lastCount; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

moveZeroes([0, 1, 0, 3, 12]);
