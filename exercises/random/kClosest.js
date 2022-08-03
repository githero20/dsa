// // // Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// // // The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// // // You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// // // Input: points = [[1,3],[-2,2]], k = 1
// // // Output: [[-2,2]]
// // // Explanation:
// // // The distance between (1, 3) and the origin is sqrt(10).
// // // The distance between (-2, 2) and the origin is sqrt(8).
// // // Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// // // We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// // // Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// // // Output: [[3,3],[-2,4]]
// // // Explanation: The answer [[-2,4],[3,3]] would also be accepted.

// // var kClosest = function (points, k) {
// //   // the formula for getting the distance of a point from the origin is:
// //   // sqrt(x*2 + y*2)
// //   // My plan is to do this for all points, sort it and return the k closest
// //   // let's sort the list based on the ones with the least sqrt
// //   points.sort(
// //     (a, b) =>
// //       Math.sqrt(a[0] ** 2 + a[1] ** 2) - Math.sqrt(b[0] ** 2 + b[1] ** 2)
// //   );
// //   return points.slice(0, k);
// //   //   this is probably an O(nlogn + n2) solution
// // };

// // kClosest(
// //   [
// //     [1, 3],
// //     [-2, 2],
// //   ],
// //   1
// // );

// // kClosest(
// //   [
// //     [3, 3],
// //     [5, -1],
// //     [-2, 4],
// //   ],
// //   2
// // );

// // let a = [1,2,3];
// // let foo = Array.from(a);
// // a= [2, 4, 6];
// // console.log(foo);

// function foo() {
//   // return arguments[0] * arguments[0];
//   a = 42;
//   let a = 27;
// }
// foo();
// console.log(a);

// // // console.log(foo(5));
// // console.log([2, 3].findIndex((el) => el > 140));

// class Foo {
//   constructor(x) {
//     this.x = x;
//   }
//   static addFooBar(f, b)
// }

var a = { b: 42 }["b"].forEach(function (c) {
  console.log(c);
});

console.log(a);
