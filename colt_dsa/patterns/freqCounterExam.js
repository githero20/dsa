// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  //   first convert the number to strings so you can loop
  let arr1 = num1.toString();
  let arr2 = num2.toString();

  let freqCnt = {};

  //   map the first num to the freq counter
  for (let num of arr1) {
    freqCnt[num] ? freqCnt[num]++ : (freqCnt[num] = 1);
  }

  //   compare with the second num
  for (let num of arr2) {
    //   this handles if the digit in the first num does not exist in the second
    if (!freqCnt[num]) {
      return false;
    } else {
      //   if it does, subtract the counter
      freqCnt[num]--;
    }
  }

  for (let key in freqCnt) {
    if (freqCnt[key] > 0) return false;
  }

  console.log(true);
  return true;
}

sameFrequency(182, 281); // true
