// Expand around center solution java
// public String longestPalindrome(String s) {
//     if (s == null || s.length() < 1) return "";
//     int start = 0, end = 0;
//     for (int i = 0; i < s.length(); i++) {
//         int len1 = expandAroundCenter(s, i, i);
//         int len2 = expandAroundCenter(s, i, i + 1);
//         int len = Math.max(len1, len2);
//         if (len > end - start) {
//             start = i - (len - 1) / 2;
//             end = i + len / 2;
//         }
//     }
//     return s.substring(start, end + 1);
// }

// private int expandAroundCenter(String s, int left, int right) {
//     int L = left, R = right;
//     while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
//         L--;
//         R++;
//     }
//     return R - L - 1;
// }

// Given a string s, return the longest palindromic substring in s.

// Google Manacher's Algorithm

// Expand Around Center solution
// T O(N^2)
// S O(1)

var longestPalindrome = function (s) {
  var max = "";
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account different palindromes like 'aba' and 'abba'
    // Iterate all palindromes with center indices [..., i, ...] or [... i, i+1, ...], can not have more than 2 center indices
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};
