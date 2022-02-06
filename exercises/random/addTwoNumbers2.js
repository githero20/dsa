// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

var addTwoNumbers = function (l1, l2) {
  // the first step is to get the last node for l1, add it to the last for l2
  let dum = new ListNode(0);
  let currHead = dum;
  let sum = 0;

  while (l1 || l2) {
    if (l1.next === null) {
      sum += l1;
    }
    l1 = l1.next;
    if (l2.next === null) {
      sum += l2;
    }
    l2 = l2.next;
  }
};
