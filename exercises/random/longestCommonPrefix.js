var longestCommonPrefix = function (strs) {
  strs.sort();
  let commonPrefix = "";
  let arrayLength = strs.length;

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0].charAt(i) == strs[arrayLength - 1].charAt(i)) {
      commonPrefix += strs[0].charAt(i);
    } else {
      break;
    }
  }

  return commonPrefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);

// https://leetcode.com/problems/divide-two-integers/solutions/1085017/js-python-java-c-updated-logarithmic-bit-manipulation-solutions-w-explanation/

// learn about bitwise functions
