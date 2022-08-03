// 20. Valid Parentheses
// Easy

// 14416

// 677

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
  //     using a stack
  let stack: string[] = [];

  if (s.length % 2 !== 0) {
    // if its odd, it can't work
    return false;
  }

  //   using a switch statement
  for (let i = 0; i < s.length; i++) {
    let k = s.charAt(i);
    // this pushes the alternate value of the bracket to the stack on initial encounter
    switch (k) {
      case "(":
        stack.push(")");
        break;

      case "[":
        stack.push("]");
        break;

      case "{":
        stack.push("}");
        break;

      // If it doesn't meet any of these values, it checks if the existing key, k is equal to the last value in the stack.
      // If it does, it'll pop it. If not, it'll return false.
      // It'll keep on doing this until all values in the array have been exhaused.
      // By then the stack should be empty

      default:
        if (k !== stack.pop()) {
          return false;
        }
    }
  }

  return !stack.length;
  //   if stack is not empty, one is missing a match, so it's false.
}
