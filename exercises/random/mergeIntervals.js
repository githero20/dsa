// REGULARLY ASKED IN THE PHONE INTERVIEW

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// // Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// var merge = function (intervals) {
//   if (!intervals.length) return intervals;
//   // first sort the array
//   intervals.sort((a, b) => a[0] - b[0]);
//   console.log(intervals);
//   let prev = intervals[0];
//   let res = [prev];
//   console.log(res);
//   //   this initializes our results array with the first, smallest interval start value
//   for (let curr of intervals) {
//     if (curr[0] <= prev[1]) {
//       prev[1] = Math.max(prev[1], curr[1]);
//     }
//     // this is the main logic, checks if the first value of the current array is less than the first
//     // if it does, then it updates the array with the larger end value
//     else {
//       res.push(curr);
//       prev = curr;
//       //   lmao this is using linkedlist logic for arrays
//     }
//   }
//   console.log(res);
//   return res;
// };

var merge = function (intervals) {
  // first make sure array is sorted according to start time of each interval
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;

  while (i < intervals.length - 1) {
    const [_, firstRight] = intervals[i];
    const [secondLeft, secondRight] = intervals[i + 1];

    if (firstRight >= secondLeft) {
      // merge first with second
      intervals[i][1] = Math.max(firstRight, secondRight);
      // remove second
      intervals.splice(i + 1, 1);
    } else {
      // move on; this grouping is done
      i++;
    }
  }

  console.log(intervals);

  return intervals;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
