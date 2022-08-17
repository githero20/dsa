// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
  for (let i = 0; i < s.length; i++) {
    s.splice(i, 0, s.pop());
  }

  //   for (let i=0, j=s.length-1; i<j; i++, j--) {
  //     const x = s[i]; const y = s[j];
  //     s[i] = y; s[j] = x;
  // }
};
