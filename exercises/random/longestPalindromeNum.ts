// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

function longestPalindromeNum(s: string): number {
  if (s === null || s.length === 0) {
    return 0;
  }

  // Using a HashSet
  let PalSet: Set<string> = new Set();
  let count: number = 0;

  for (let char of s) {
    if (PalSet.has(char)) {
      count++;
      //   this keeps track of every double letter i.e. that could cause a palindrome
      PalSet.delete(char);
    } else {
      PalSet.add(char);
    }
  }

  //   by simple logic our palindrome should be count * 2
  //   but in a situation where there may be a letter in the middle of the palindrome i.e. abcba, we have to add 1
  if (PalSet.size === 0) {
    console.log(count * 2);
    return count * 2;
  } else {
    console.log(count * 2 + 1);
    return count * 2 + 1;
  }
  //   so this way, we know that if the set is empty; we don't need to add 1
  //   however, if it is not, then we add one letter
}

longestPalindromeNum("abccccdd");
