var minMeetingRooms = function (intervals) {
  if (!intervals || intervals.length < 0) return 0;

  // sort all start and end times
  let start = intervals.map((a) => a[0]).sort((a, b) => a - b);
  let end = intervals.map((a) => a[1]).sort((a, b) => a - b);
  //   the map funcrion returns an array of every a[0] item, and a[1] respectively

  let rooms = 0;
  let endPtr = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (start[i] < end[endPtr]) {
      rooms++;
    } else {
      endPtr++;
    }
  }

  return rooms;
};

// Can't use this method because I'll have to sort both start ad end dates
// var minMeetingRooms = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0])
//   //   sort the array in ascending order based on the start times

//   let meetings = intervals.length;

//   for (let i = 0; i < intervals.length - 1; i++) {
//     // let [x, firstEnd] = intervals[i];
//     // let [secondStart, y] = intervals[i + 1];

//     // if (firstEnd <= secondStart) {
//     if (intervals[i][1] <= intervals[i + 1][0]) {
//       // so if a meeting ends before another starts, we reduce the time by 1
//       meetings--;
//     }
//   }

//   //   console.log(meetings);
//   return meetings;
// };

minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20],
]);
minMeetingRooms([
  [7, 10],
  [2, 4],
]);
