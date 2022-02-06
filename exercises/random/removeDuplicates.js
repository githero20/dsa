var removeDuplicates = function (nums) {
  let val = 0;
  for (let i = 0; i < nums.length; i++) {
    //   Swaps numbers if current number is not a duplicate
    if (nums[i] !== nums[i + 1]) {
      nums[val] = nums[i];
      val++;
    }
  }
  // return val;
  console.log(nums);
};

// removeDuplicates([0, 1, 2, 2, 3, 0, 4, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
