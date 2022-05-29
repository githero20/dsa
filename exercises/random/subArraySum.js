// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Input: nums = [1,1,1], k = 2
// Output: 2

// Hashmap Solution 1, detailed version is below
// Seems like ES6 JS (e.g. for.. of) runs faster than plain JS
var subarraySum = function (nums, k) {
    const map = new Map([[0, 1]]);
    // initialize your map with an initial key, value pair of 0,1 i.e. map.set(0,1)
    let sum = 0;
    let count = 0;
  
    for (let num of nums) {
      sum += num;
      // sums up the nums
      if (map.has(sum - k)) count += map.get(sum - k);
      //   this is usually count += 1, because the value for all keys is 1 unless otherwise.
      map.set(sum, (map.get(sum) || 0) + 1);
      // updates the map with a new key, value entry
      // this is either (sum, 1) or (sum, sum + 1)
    }
  
    return count;
  };
  

// Using a hashMap
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;

  // initialize your map
  let myMap = new Map();

  // set the initial values
  myMap.set(0, 1);

  //   loop through the map
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (myMap.has(sum - k)) {
      count += myMap.get(sum - k);
      //   this is usually count += 1, because the value for all keys is 1 unless otherwise.
    }
    myMap.set(sum, (myMap.get(sum) || 0) + 1);
    // updates the map with a new key, value entry
    // this is either (sum, 1) or (sum, sum + 1)
  }
  return count;
};
