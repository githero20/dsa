// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,*2,2,3,*5,*6] with the asterisked elements coming from nums1.

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

// Start by comparing the largest numbers between
// the two arrays and add to the end of nums1
// note: nums1.length = m + n;
var merge = function (nums1, m, nums2, n) {
  // first of all we check to ensure that nums2 length is not 0; i.e. n !== 0
  while (n) {
    // then we check to see if the last actual value (not the zero fillers at the end)
    // of the nums1 array is greater than that of the nums2 array
    // we can do this because it is already sorted
    if (nums1[m - 1] > nums2[n - 1]) {
      // then it pushes it to the end of the array
      nums1[m + n - 1] = nums1[--m];
    } else {
      // if not, and this is our initial position, it removes the values of nums2 and adds them to the end of nums1
      // this continues until you get a last value of nums2 that is < nums[m-1]; i.e. first condition
      // then it pushes the nums1 value to the end of the array, moving on to the next one. Effectively sorting the arrray
      nums1[m + n - 1] = nums2[--n];
      // Note: because the array's endings are already prefilled with 0, add means replace the zero
    }
  }
  return nums1;
  //   console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
