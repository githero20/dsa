// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    // this is result.next, remember that result = current; therefore the first current.next === result.next.
    // also remember that 7%10 === 7; 10%10=== 0
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
    // we use this value to initialize the next node i.e. current.next can either be 0 or 1, depending on the result from above
  }

  return result.next;
  // remember that result was initially pointing to the first current, now we return the next one, i.e. the first current.next
  // this is how we're returning the saved up values
  // i.e. result.next === current.next === sum
};

// REcursive solution
// var addTwoNumbers = function (l1, l2) {
//   let node = null;
//   const carry = arguments[2];
//  this accepts the 3rd element in the function, i.e. sum in the recursive function
//   if (l1 || l2) {
//     const val1 = l1 ? l1.val : 0;
//     // accepts l1's value
//     const val2 = l2 ? l2.val : 0;
//     // accepts l2's value
//     const next1 = l1 ? l1.next : null;
//     // accepts the next value after l1
//     const next2 = l2 ? l2.next : null;
//     // accepts the next value after l2
//     const sum = carry ? val1 + val2 + 1 : val1 + val2;
//     // we're only adding one, because according to the question, carry !> 1
//     node = new ListNode(sum % 10);
//     node.next = addTwoNumbers(next1, next2, sum >= 10);
//   } else if (carry) {
//     node = new ListNode(1);
//     node.next = null;
//   }
//   return node;
// };

// var addTwoNumbers = function (l1, l2) {
//   let dummyHead = new ListNode(0);
//   //  this creates a new node with initial value of 0, n.b: listnode is a function they asked me to use
//   let u = l1;
//   //  accepts their listNode value, l1
//   let v = l2;
//   let curr = dummyHead;
//   //  sets the current value to the dummy node head
//   let carryOver = 0;
//   while (u != null || v != null) {
//     let x = u != null ? u.val : 0;
//     let y = v != null ? v.val : 0;
//     let sum = carryOver + x + y;
//     //  sums up the values of the nodes
//     carryOver = sum / 10;
//     curr.next = new ListNode(sum % 10);
//     curr = curr.next;
//     if (u != null) {
//       u = u.next;
//     }
//     if (v != null) {
//       v = v.next;
//     }
//   }
//   if (carryOver > 0) {
//     curr.next = new ListNode(carryOver);
//   }
//   return dummyHead.next;
// };

// var addTwoNumbers = function (l1, l2) {
//   let head,
//     c = head,
//     one = l1,
//     two = l2,
//     carry = 0;

//   while (one || two) {
//     let x = 0,
//       y = 0,
//       sum = carry,
//       next,
//       tmpNode;
//     if (one.val) {
//       x = one.val;
//     }
//     if (two.val) {
//       y = two.val;
//     }
//     sum += x + y;
//     carry = Math.floor(sum / 10);
//     next = sum % 10;
//     tmpNode = new ListNode(next);
//     if (head == null) {
//       head = new ListNode(next);
//       c = head;
//     } else {
//       c.next = tmpNode;
//       c = c.next;
//     }
//     if (one.next != null) {
//       one = one.next;
//     } else {
//       one = false;
//     }
//     if (two.next != null) {
//       two = two.next;
//     } else {
//       two = false;
//     }
//   }
//   if (carry > 0) {
//     let tmpNode = new ListNode(carry);
//     c.next = tmpNode;
//   }
//   return head;
// };
