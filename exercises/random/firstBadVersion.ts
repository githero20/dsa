// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    // we have a list of numbers, we want to find the first bad version without making too many calls to the API
    // best way is to use BS.

    let low: number = 1; // we know it starts at 1
    let high: number = n;

    while (low < high) {
      let mid: number = Math.floor(low + (high - low) / 2);

      if (isBadVersion(mid) === false) {
        // this means the first bad version has not yet occurred so you need to go forward
        low = mid + 1;
      } else if (isBadVersion(mid) === true) {
        // this means it has occured and you need to go lower
        // high = mid - 1; this will no work
        high = mid;
      }
    }

    return low;
  };
};
