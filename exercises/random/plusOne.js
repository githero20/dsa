// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
var plusOne = function (digits) {
  // sum it up from behind
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    // if it is === 9, means adding 1 will turn it to 0
    digits[i] = 0;
  }

  // Edge case:
  // if all the numbers are [9,9,9] then according to this it will return [0, 0, 0]
  // to solve this, we'll create a new array and replace the first value with 1
  digits = Array(digits.length + 1).fill(0);
  digits[0] = 1;
  return digits;
};

// Full explanation here:
// for (int i = digits.length - 1; i >= 0; i--) {
// 	if (digits[i] < 9) {
// 		digits[i]++;
// 		return digits;
// 		// starting from extreme right--> if array[i] is less than 9 means can be added with 1
// 		// i.e. [ 5,8 ]-->[ 5,9 ] or
// 		//      [ 9,4 ]-->[ 9,5 ] or
// 		//      [ 6,0 ]-->[ 6,1 ]
// 		// and will directly return array
// 	}
// 	digits[i] = 0;
// 	// if array[i] is not less than 9, means it have to be 9 only then digit is changed to 0,
// 	// and we again revolve around loop to check for number if less than 9 or not
// 	// i.e. [ 5,9 ]-->[ 5,0 ]-loop->[ 6,0 ] or
// 	//      [ 1,9,9 ]-->[ 1,9,0 ]-loop->[ 1,0,0 ]-loop->[ 2,0,0 ]
// 	// and will directly return array
// }

// // if all number inside array are 9
// // i.e. [ 9,9,9,9 ] than according to above loop it will become [ 0,0,0,0 ]
// // but we have to make it like this [ 9,9,9,9 ]-->[ 1,0,0,0,0 ]

// // to make like above we need to make new array of length--> n+1
// // by default new array values are set to -->0 only
// // thus just changed first value of array to 1 and return the array

// digits = new int[digits.length + 1];
// digits[0] = 1;
// return digits;
