// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)

  // you can loop through the arr and just return false when
  // two entries in the array do not match

  // first we sort the array to allow our multiple pointers algo work
  let args = [...arguments].sort();
  // console.log(args);

  // edge case, if there is no argument
  if (args.length === 0) return false;

  let init = 0;
  for (let i = 1; i < args.length; i++) {
    // console.log("init: ", typeof args[init], args[init]);
    // console.log("i: ", typeof args[i], args[i]);

    if (args[init] !== args[i]) {
      init++;
      args[init] = args[i];
      // console.log(false);
    } else {
      // console.log(true);
      return true;
    }
  }
  return false;
}

areThereDuplicates("a", "b", "c", "a");

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, target) {
  // add whatever parameters you deem necessary - good luck!

  //   first, edge case:
  if (arr.length === 0) return false;

  //   using a BST
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    let ave = (arr[lo] + arr[hi]) / 2;

    if (ave === target) {
      console.log(true);
      return true;
    } else if (ave < target) {
      lo++;
    } else if (ave > target) {
      hi--;
    }
  }

  console.log(false);
  return false;
}

averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
