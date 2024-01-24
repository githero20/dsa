// FREQUENCY COUNTER PATTERN
// Used when you have 2 strings and you want to check if the occurrence of characters in both are the same

// compare two arrays, check to see that the second contains squares of all numbers in the first

// Complexity O(N^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let trueIndex = arr2.indexOf(arr1[i] ** 2);

//     if (trueIndex === -1) {
//       return false;
//     }
//     arr2.splice(trueIndex, 1);
//   }
//   console.log(true);
//   return true;
// }t

// Using a frequency counter to compare arrays

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let freqCnt1 = {};
//   let freqCnt2 = {};

//   // creates key, value pairs of the item in the array in the freqCnt objects
//   // and sums up for everyone that repeats itself
//   for (let val of arr1) {
//     freqCnt1[val] = (freqCnt1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     freqCnt2[val] = (freqCnt2[val] || 0) + 1;
//   }

//   // now the validation, the keys in freqCnt2 must be square of what is in 1
//   for (let key in freqCnt1) {
//     if (!(key ** 2 in freqCnt2)) {
//       return false;
//     }

//     if (freqCnt1[key] !== freqCnt2[key ** 2]) {
//       return false;
//     }
//   }

//   console.log(freqCnt1); // { '1': 1, '2': 2, '3': 1 }
//   console.log(freqCnt2); // { '1': 1, '4': 2, '9': 1 }
//   console.log(true); // true
//   return true;
// }

// same([1, 2, 3, 2], [9, 1, 4, 4]);

// check if 2 strings are anagrams of each other using freq counter (basically a hash map)
function anagramFreq(str1, str2) {
  // return false if lengths do not match
  if (str1.length !== str2.length) return false;

  let freqCnt1 = {};
  let freqCnt2 = {};

  // create counters for each str
  for (let char of str1) {
    freqCnt1[char] = (freqCnt1[char] || 0) + 1;
    // if (char in freqCnt1) {
    //   freqCnt1[char]++;
    // } else {
    //   freqCnt1 = 0;
    // }
  }
  for (let char of str2) {
    freqCnt2[char] = (freqCnt2[char] || 0) + 1;
  }

  // compare both
  // method 1: compare the values of both object's keys if any is different then return false
  for (let key in freqCnt1) {
    if (!(key in freqCnt2)) return false;
    if (freqCnt2[key] !== freqCnt1[key]) return false;
  }

  console.log(freqCnt1);
  console.log(freqCnt2);
  console.log(true); // true
  return true;
}

anagramFreq("", "");
anagramFreq("aaz", "zza");
anagramFreq("cinema", "iceman");
anagramFreq("awesome", "awesom");

// Uses 2 counters, compares the counter for the first anagram with that for the second
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;

  let freqCnt1 = {};
  let freqCnt2 = {};

  // create freq counters
  for (let val of str1) {
    // freqCnt1[val] = (freqCnt1[val] || 0) + 1;
    freqCnt1[val] ? (freqCnt1[val] += 1) : (freqCnt1[val] = 1);
    // could also use this instead of the logic above
  }
  for (let val of str2) {
    freqCnt2[val] = (freqCnt2[val] || 0) + 1;
  }

  //   Validation, check the first counter with the second
  for (let key in freqCnt1) {
    if (!freqCnt2[key]) return false;

    if (freqCnt2[key] !== freqCnt1[key]) return false;
  }
  return true;
}

// Colt's solution, using one counter
// Just compares the counter with the second anagram itself
// this one utilises just one counter and increments, decrements the values regardless
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let counter = {};

  // now populate the counter
  for (let char of str1) {
    // counter[char] = (counter[char] || 0) + 1;
    counter[char] ? counter[char]++ : (counter[char] = 1);
  }

  // now compare with the rest of the params (could use this for multiple)
  for (let char of str2) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char]--;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");
