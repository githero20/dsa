// https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// [4,5,5,5,4]
// Map
// {
//   4: {
//     2,
//   },
//   5: {
//     3
//   }
// }

// if 5.val > n/2 {
// return 5
// }

function majorityElement(nums) {
  let charMap = {};
  let n = nums.length;
  let cnt = 0;
  let maxNum = null;

  for (let i = 0; i < n; i++) {
    if (charMap[nums[i]]) {
      charMap[nums[i]]++;
    } else {
      charMap[nums[i]] = 1;
    }

    if (charMap[nums[i]] > cnt) {
      cnt = charMap[nums[i]];
      maxNum = nums[i];
    }
  }

  return maxNum;
}

// O(n)
// [2,2,1,1,1,2,2]

// console.log(majorityElement([2,2,1,1,1,2,2]));

// function majorityElement(nums) {
//     let maxNum = 0;
//   }

//   majority

//   3/ 2 ->

//   count of majority > other count

//     4 , 3
//    majority => 4;
//   count = 0;
//                *
//   [2,2,1,1,1,2,4]

console.log(typeof 2);
