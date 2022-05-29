// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

// 1337. The K Weakest Rows in a Matrix
// Easy

// 2010

// 106

// Add to List

// Share
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// Example 1:

// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:

// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 1
// - Row 1: 4
// - Row 2: 1
// - Row 3: 1
// The rows ordered from weakest to strongest are [0,2,3,1].

// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.

//     frequency helper
// to get the max no of 1s in the array
const myFreq = (arr, val) => {
  return arr.filter((v) => v === val).length;
};

var kWeakestRows = function (mat, k) {
  let res = [];
  for (let i = 0; i < mat.length; i++) {
    res.push([i, myFreq(mat[i], 1)]);
  }
  res.sort((a, b) => a[1] - b[1]);
  let finalRes = [];
  for (let j = 0; j < k; j++) {
    finalRes.push(res[j][0]);
  }
  return finalRes;
};


// var kWeakestRows = function(mat, k) {
//     let inCount = mat[0].length
//     let stack = []
//     let res = []
    
//     for(let i=0; i<mat.length; i++){
//         mat[i].sort()
//         if(mat[i].indexOf(1) !== -1){
//             var count = inCount - (mat[i].indexOf(1))
//         }else{
//             var count = 0
//         }
//         stack.push({ pos:i, count: count})
//     }
  
//     stack.sort((a,b)=>{
//         if(a.count === b.count){
//             return a.pos - b.pos
//         }else{
//               return a.count - b.count
//         }
//     })
    
//     for(i=0; i < k; i++){
//         res.push(stack[i].pos)
//     }
//     return res
//   };
  
