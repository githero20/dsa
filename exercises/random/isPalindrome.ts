function isPalindrome(s: string): boolean {
  //     first we save the reversed string
  // then we need a helper function to clean the string
  const cleanStr = (str: string): string => {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // return str.replace(/[^\w]/g, "").toLowerCase()
  };
  //         then we need to check if it is a palindrome
  let clean = cleanStr(s);

  if (clean.length <= 1) {
    return true;
  }

  return clean.split("").every((char, i) => {
    return char === clean[clean.length - i - 1];
  });
  //     checks every char in the str against its opposite counterpart
}
