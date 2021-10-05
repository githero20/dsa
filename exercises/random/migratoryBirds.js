function migratoryBirds(arr) {
  let sorted = arr.sort();
  let ans = sorted[0];
  let maxOccur = 1,
    counter = 0;

  for (let i = 0; i < sorted.length; i++) {
    counter = sorted[i] === sorted[i - 1] ? counter + 1 : 0;
    if (counter > maxOccur) {
      ans = sorted[i];
      maxOccur = counter;
    }
  }

  return ans;
}

// function migratoryBirds(arr) {
//     // Write your code here

// One
// let count = {}

// arr.forEach((i) => { count[i] = (count[i]||0) + 1 })

// let birdId = Object.keys(count) let birdQty = Object.values(count)

// let max = Math.max.apply(null, birdQty);

// for (let i=0; i < birdQty.length; i++) { if (birdQty[i] === max ) { birdId = birdId[i] birdQty = birdQty[i] } }

// return birdId

// Two
//     let counter = [];
//     let result = 0;
//     let max = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let id = arr[i];

//     counter[id]++;

//     if (counter[id] > max) {
//         max = counter[id];
//         result = id;
//     } else if (counter[id] == max) {
//         result = Math.min(result, id);
//     }
//     }

// // return result;
//     console.log(result);
// }

// My first solution
// function migratoryBirds(arr) {
//     // Write your code here
// Loop through the array, and compare for each element there
// if the same element is present more than once, increment a counter for that element
//     let cnt1 = 0;
//     let cnt2 = 0;
//     let cnt3 = 0;
//     let cnt4 = 0;
//     let cnt5 = 0;

//     // use a set to prevent double instances of same numbers
//     let mySet = new Set();
//     // then map the array elements to the set
//     arr.map((item) => mySet.add(item));
//     console.log(mySet);

//     // now loop through the array
//     // if you use for (let num of arr), then remember to use num and not arr[num] when comparing to the set
//         for (let i = 0; i < arr.length; i++) {
//         if ( mySet.has(arr[i]) && arr[i] === 1 ) {
//             cnt1++;
//             // mySet.delete(arr[num]);
//         } else if ( mySet.has(arr[i]) && arr[i] === 2 ) {
//             cnt2++;
//             // mySet.delete(arr[num]);
//         } else if ( mySet.has(arr[i]) && arr[i] === 3 ) {
//             cnt3++;
//             // mySet.delete(arr[num]);
//         } else if ( mySet.has(arr[i]) && arr[i] === 4 ) {
//             cnt4++;
//             // mySet.delete(arr[num]);
//         } else if ( mySet.has(arr[i]) && arr[i] === 5 ) {
//             cnt5++;
//             // mySet.delete(arr[num]);
//         }
//     }
//     console.log(cnt1);
//     console.log(cnt2);
//     console.log(cnt3);
//     console.log(cnt4);
//     console.log(cnt5);

//     // now to return number (key) with the greatest counter
//     //Option1: create a map, with numbers names as keys and counters as values
//     // let myMap = new Map();
//     // myMap.set(cnt1, 1);
//     // myMap.set(cnt2, 2);
//     // myMap.set(cnt3, 3);
//     // myMap.set(cnt4, 4);
//     // myMap.set(cnt5, 5);
//     // console.log(myMap)

//     // //Option2: create an array
//     let grt = [cnt1, cnt2, cnt3, cnt4, cnt5];
//     console.log(grt);
//     let maxCnt = 0;
//     for (let no of grt) {
//         if (no > maxCnt) {
//             maxCnt = no;
//         }
//     }
// Problem is that I'm getting the value instead of the number attached to it.
//     console.log(maxCnt);
//     // // return maxCnt;
// }
// migratoryBirds([1,2,3,4,5]);
migratoryBirds([1, 2, 3, 4, 4, 4, 5, 3, 1]);
