// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs?
// 5. How should I label the important pieces of data that are a part of the problem?

// Write a function that takes two numbers and returns their sum

// 1. Implement Addition
// 2. Ints, floats, strings for large numbers?
// 3. Ints, floats, strings?
// 4. Can the

// Explore Examples
// Start with Simple Examples
// More complex ones
// Examples with empty inputs
// Examples with invalid inputs

// Explicitly write down the steps you need to take

// Character Count Algo
// My Steps

// do somth
// return an object with keys that are lowercase alphanumeric characters in the string

// make object to return at end
// loop over string, for each character...
// if the char is a number/letter AND is a key in the object, add one to count
// if the char is a number/letter AND is not in the object, add it to the object and set value to 1
// if character is something else, don't do anything
// return object at end

// a helper function to determine if a function is alphanumeric
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

function charCount(str) {
  // make object to return at end
  let obj = {};

  // loop over string, for each character...
  for (let char of str) {
    // if the char is a number/letter AND is a key in the object, add one to count

    // if (/[a-z0-9]/.test(char)) {
    // regex is not too reliable

    if (isAlphaNumeric(char)) {
      char = char.toLowerCase(); // converts all to alphanumeric
      obj[char] = ++obj[char] || 1;
      // if (obj[char] > 0) {
      //   obj[char]++;
      // } else {
      //   // if the char is a number/letter AND is not in the object, add it to the object and set value to 1
      //   obj[char] = 1;
      // }
    }
  }
  // if character is something else, don't do anything

  // return object at end
  console.log(obj);
  return obj;
}

charCount("Hello there, friend.");
charCount("ALWAYS REFACTOR!!!");
charCount("DO IT OUT LOUD TOO");
