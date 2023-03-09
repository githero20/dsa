var checkIfExist = function (arr) {
  // Omogbai, once you hear hashtables in js think set
  let mySet = new Set();

  for (let val of arr) {
    if (mySet.has(val * 2) || mySet.has(val / 2)) {
      return true;
      //   console.log(true);
    }
    mySet.add(val);
    // else console.log(false);
  }
  return false;

  // //   Using Array.some
  // const check = (val) => val / 2 || val * 2;
  // array.some(check);
};
checkIfExist([10, 2, 5, 3]);

// https://leetcode.com/problems/check-if-n-and-its-double-exist/discuss/839197/1346-Ten%2B-solutions-Different-caches-and-No-cache

// Depending on if we have enough memory or not, we can choose one of the answers
// I would choose 1st solution Set
// Or, if someone says no more memory, then would choose the 4th solution, the simpler for (i) for (j) loop

// var checkIfExist = function(A) {
//     let set = new Set();

//     for (let e of A) {
//         if (set.has(e * 2) || set.has(e / 2))
//             return true;
//         set.add(e);
//     }

//     return false
// };

// this Has higher time complexity
// var checkIfExist = function(A) {
//     let n = A.length;

//     for (let i = 0; i < n; i++)
//         for (let j = 0; j < i; j++)
//             if ((A[i] === A[j] * 2) || (A[i] === A[j] / 2))
//                 return true;

//     return false
// };
