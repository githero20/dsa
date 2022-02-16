// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// Trying to do this in O(n) time and O(1) space complexity

// var compress = function (chars) {
//   // First, we create a hash map to store their counts
//   let myMap = new Map();
//   let sorted = [];
//   for (let char of chars) {
//     if (myMap[char]) {
//       myMap[char]++;
//     } else {
//       myMap[char] = 1;
//     }
//   }

//   //   get a list of all entries in ascending order
//   //   const mine = Object.entries(myMap).sort((a, b) => a[1] - b[1]);
//   //   console.log(mine);

//   // then we loop through it, addding their values behind them into an array

//   // for (let arr of mine) {
//   for (let arr of Object.entries(myMap).sort((a, b) => a[1] - b[1])) {
//     sorted.push(arr[0]);
//     if (arr[1] > 1) sorted.push(arr[1]);
//   }

//   //   // sorting in descending order so I can push to the main array and it falls automatically
//   //   for (let arr of Object.entries(myMap).sort((a, b) => b[1] - a[1])) {
//   //     chars.unshift(arr[1]);
//   //     // this adds it to the top of the existing arr
//   //     chars.unshift(arr[0]);
//   //   }

//   console.log(sorted);
//   return sorted;

//   chars = sorted;

//   return chars;

//   // then we put these values in the top of the chars array
//   //   chars.unshift(...sorted);

//   //   console.log(chars);
// };

var compress = function (chars) {
  // First, we create a hash map to store their counts
  let myMap = new Map();
  let sorted = [];
  for (let char of chars) {
    if (myMap[char]) {
      myMap[char]++;
    } else {
      myMap[char] = 1;
    }
  }

  //   get a list of all entries in ascending order
  // then we loop through it, addding their values behind them into an array
  for (let arr of Object.entries(myMap).sort((a, b) => a[1] - b[1])) {
    sorted.push(arr[0]);
    if (arr[1] > 1 && arr[1] < 10) {
      sorted.push(arr[1].toString());
    } else if (arr[1] >= 10) {
      sorted.push(...arr[1].toString().split(""));
    }
  }

  chars.unshift(...sorted);

  console.log(chars);
  return sorted.length;
};

compress(["a", "a", "b", "b", "c", "c", "c"]);
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);

var compress = function (chars) {
  if (!chars.length) return 0;
  let j = 0;
  let cur = chars[0];
  let counter = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === cur) {
      counter++;
    } else {
      chars[j] = cur;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      cur = chars[i];
      counter = 1;
    }
  }
  return j;
};

var compress = function (chars) {
  if (chars === null || chars.length <= 0) return 0;
  let start = 0,
    end = 0;
  if (chars.length > 1) {
    while (start < chars.length) {
      if (chars[start] === chars[end]) {
        end++;
      } else if (end === start + 1) {
        start = end;
        end++;
      } else {
        let diff = (end - start).toString().split("");
        chars.splice(start + 1, end - (start + 1), ...diff);
        end = start = start + 1 + diff.length;
      }
    }
  }
  return chars.length;
};

var compress = function (chars) {
  let count = 1;
  let start = 0;

  for (let i = 1; i < chars.length; i++) {
    let current = chars[i];
    let pre = chars[i - 1];

    if (current === pre) {
      count++;
    } else {
      if (count === 1) {
        start = i;
        continue;
      }

      let countStr = count.toString().split("");
      chars.splice(start + 1, count - 1, ...countStr);

      // reset i to index of "current" char after splice
      i = start + countStr.length + 1;
      start = i;
      count = 1;
    }
  }
};
