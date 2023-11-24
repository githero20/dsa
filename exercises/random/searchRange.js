const left_bound = (nums, target) => {
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return left + 1;
};

const right_bound = (nums, target) => {
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return right - 1;
};

var searchRange = function (nums, target) {
  //   Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
  // If target is not found in the array, return [-1, -1].
  // You must write an algorithm with O(log n) runtime complexity.
  // Input: (nums = [5, 7, 7, 8, 8, 10]), (target = 8);
  // Output: [3, 4];
  // Input: (nums = [5, 7, 7, 8, 8, 10]), (target = 6);
  // Output: [-1, -1];
  // Since it's sorted in non-decreasing order, a BST should be suitable
  // Use binary search to find the target's index from left side of an array and from the right side of an array.

  if (!nums.includes(target)) {
    return [-1, -1];
  }
  const left = left_bound(nums, target);
  const right = right_bound(nums, target);

  return [left, right];
};
