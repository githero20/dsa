// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
  // this is very similar to twoSums, only the target is 0

  // PREFERRED APPROACH
  // Approach One: Using TwoSumsII approach
  // Sort the array and use a BST, looping from left and right
  let res = [];
  nums.sort((a, b) => a - b);
  // now, lets loop through the array, ignoring any values that are greater than 0 or duplicates

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    // 0 can be interchanged for target here

    // we've sorted out the values > 0, in the line above
    if (i == 0 || nums[i - 1] !== nums[i]) {
      // we've sorted out the duplicates
      twoSumII(nums, res, i);
      // now we use the twoSumII function to our advantage
    }
  }
  // console.log(res);
  return res;
};

const twoSumII = (nums, res, i) => {
  // here we use a bst
  let lo = i + 1;
  let hi = nums.length - 1;
  while (lo < hi) {
    let sum = nums[i] + nums[lo] + nums[hi];
    if (sum < 0) {
      lo++;
    } else if (sum > 0) {
      hi--;
    } else {
      res.push([nums[i], nums[lo], nums[hi]]);
      lo++;
      hi--;

      // while (nums[lo] === nums[lo + 1]) lo++;
      // while (nums[hi] === nums[hi - 1]) hi--;

      while (lo < hi && nums[lo] == nums[lo - 1]) {
        // this is for the next array, it also checks to see if the current val is a duplicate, if it is then it moves to the next number
        lo++;
      }
    }
  }
};

// Complexity Analysis

// Time Complexity: O(n^2). twoSumII is O(n), and we call it n times.

// Sorting the array takes O(nlogn), so overall complexity is \mathcal{O}(n\log{n} + n^2)O(nlogn+n
// 2
//  ). This is asymptotically equivalent to \mathcal{O}(n^2)O(n
// 2
//  ).

// Space Complexity: from \mathcal{O}(\log{n})O(logn) to \mathcal{O}(n)O(n), depending on the implementation of the sorting algorithm. For the purpose of complexity analysis, we ignore the memory required for the output.

// Approach 2: Using HashSets

var threeSum = function (nums) {
  // this is very similar to twoSums, only the target is 0

  // Second Option: Using TwoSums approach, Hashset
  let res = [];
  nums.sort((a, b) => a - b);
  // now, lets loop through the array, ignoring any values that are greater than 0 or duplicates
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (nums[i] > 0) {
      break;
    }
    // 0 can be interchanged for target here
    // we've sorted out the values > 0, in the line above
    if (i == 0 || nums[i - 1] !== nums[i]) {
      // we've sorted out the duplicates
      twoSumII(nums, res, i);
      // now we use the twoSumII function to our advantage
    }
  }
  // console.log(res);
  return res;
};

const twoSumII = (nums, res, i) => {
  // here we use a hashset
  // usng a set to also avoid the duplicates

  let seen = new Set();
  for (let j = i + 1; j < nums.length; j++) {
    let complement = -nums[i] - nums[j];
    // this is similar to target - nums[i] from twoSum, only target is 0
    if (seen.has(complement)) {
      res.push([nums[i], nums[j], complement]);
      while (j < nums.length - 1 && j == j + 1) {
        j++;
      }
    } else {
      seen.add(nums[j]);
    }
  }
};

// Approach 3
// Unsorted

// Algorithm

// The algorithm is similar to the hashset approach above. We just need to add few optimizations so that it works efficiently for repeated values:

// Use another hashset dups to skip duplicates in the outer loop.
// Without this optimization, the submission will time out for the test case with 3,000 zeroes. This case is handled naturally when the array is sorted.
// Instead of re-populating a hashset every time in the inner loop, we can use a hashmap and populate it once. Values in the hashmap will indicate whether we have encountered that element in the current iteration. When we process nums[j] in the inner loop, we set its hashmap value to i. This indicates that we can now use nums[j] as a complement for nums[i].
// This is more like a trick to compensate for container overheads. The effect varies by language, e.g. for C++ it cuts the runtime in half. Without this trick the submission may time out.

// class Solution {
//   public List<List<Integer>> threeSum(int[] nums) {
//       Set<List<Integer>> res = new HashSet<>();
//       Set<Integer> dups = new HashSet<>();
//       Map<Integer, Integer> seen = new HashMap<>();
//       for (int i = 0; i < nums.length; ++i)
//           if (dups.add(nums[i])) {
//               for (int j = i + 1; j < nums.length; ++j) {
//                   int complement = -nums[i] - nums[j];
//                   if (seen.containsKey(complement) && seen.get(complement) == i) {
//                       List<Integer> triplet = Arrays.asList(nums[i], nums[j], complement);
//                       Collections.sort(triplet);
//                       res.add(triplet);
//                   }
//                   seen.put(nums[j], i);
//               }
//           }
//       return new ArrayList(res);
//   }
// }

// Approach 4
// function threeSum(nums) {
//   const results = [];

//   // obviously irrelevant if we don't have at least 3 numbers to play with!
//   if (nums.length < 3) return results;

//   // having the numbers in ascending order will make this problem much easier.
//   // also, knowing the overall problem  will take at least O(N^2) time, we can
//   // afford the O(NlogN) sort operation
//   nums = nums.sort((a, b) => a - b);

//   // if the question asks us for a custom target, we can control it here
//   let target = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     // `i` represents the "left" most number in our sorted set.
//     // once this number hits 0, there's no need to go further since
//     // positive numbers cannot sum to a negative number
//     if (nums[i] > target) break;

//     // we don't want repeats, so skip numbers we've already seen
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     // `j` represents the "middle" element between `i` and `k`.
//     // we will increment this up through the array while `i` and `k`
//     // are anchored to their positions. we will decrement `k` for
//     // for each pass through the array, and finally increment `i`
//     // once `j` and `k` meet.
//     let j = i + 1;

//     // `k` represents the "right" most element
//     let k = nums.length - 1;

//     // to summarize our setup, we have `i` that starts at the beginning,
//     // `k` that starts at the end, and `j` that races in between the two.
//     //
//     // note that `i` is controlled by our outer for-loop and will move the slowest.
//     // in the meantime, `j` and `k` will take turns inching towards each other depending
//     // on some logic we'll set up below. once they collide, `i` will be incremented up
//     // and we'll repeat the process.

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];

//       // if we find the target sum, increment `j` and decrement `k` for
//       // other potential combos where `i` is the anchor
//       if (sum === target) {
//         // store the valid threesum
//         results.push([nums[i], nums[j], nums[k]]);

//         // this is important! we need to continue to increment `j` and decrement `k`
//         // as long as those values are duplicated. in other words, we wanna skip values
//         // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
//         // [[-2,0,2], [-2,0,2]].
//         //
//         // (i'm not a fan of this part because we're doing a while loop as we're
//         // already inside of another while loop...)
//         while (nums[j] === nums[j + 1]) j++;
//         while (nums[k] === nums[k - 1]) k--;

//         // finally, we need to actually move `j` forward and `k` backward to the
//         // next unique elements. the previous while loops will not handle this.
//         j++;
//         k--;

//         // if the sum is too small, increment `j` to get closer to the target
//       } else if (sum < target) {
//         j++;

//         // if the sum is too large, decrement `k` to get closer to the target
//       } else {
//         // (sum > target)
//         k--;
//       }
//     }
//   }

//   console.log(results);
//   return results;
// }

threeSum([-1, 0, 1, 2, -1, -4]);
