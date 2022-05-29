// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

(function main() {
  const nums = [-1, 1, 0, -3, 3];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let res = 1;
    let k = 0;
    while (k < nums.length) {
      if (k === i) {
        k++;
      } else {
        res = res * nums[k];
        k++;
      }
    }
    let ans = parseInt(res);
    result.push(ans);
  }
  console.log(result);
})();

(function main() {
  const nums = [-1, 1, 0, -3, 3];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let res = 1;
    let k = 0;
    while (k < nums.length) {
      if (k != i) {
        res = res * nums[k];
      }
      k++;
    }
    let ans = parseInt(res);
    result.push(ans);
  }
  console.log(result);
})();

// O(n2) time complexity, O(n) space complexity

(function main() {
  // const nums = [-1,1,0,-3,3]
  // let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //     let res = 1;
  //     let k = 0;
  //     while (k < nums.length) {
  //         if (k != i) {
  //             res = res * nums[k];
  //         }
  //         k++
  //     }
  //     let ans = parseInt(res)
  //     result.push(ans)
  // }
  // console.log(result);

  const nums = [1, 2, 3, 4];
  const n = nums.length;
  const result = new Array(n).fill(0);

  let left = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left *= nums[i];
  }
  console.log("from left --", result);

  right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  console.log("from right --", result);

  // O(2n) -> O(n)
})();
