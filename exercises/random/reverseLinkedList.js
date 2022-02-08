// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

var reverseList = function (head) {
  // using recursion
  if (head === null || head.next === null) {
    return head;
  }

  let curr = reverseList(head.next);
  //     assume the rest of the linked list has already been reversed
  //     our goal is to reverse the front part
  // we want the node 2 steps ahead to equal the current one
  head.next.next = head;
  head.next = null;
  //     the above step is necessary for lists with size == 2
  return curr;
};

// Iterative Approach
// Assume that we have linked list 1 → 2 → 3 → Ø, we would like to change it to Ø ← 1 ← 2 ← 3.

// While you are traversing the list, change the current node's next pointer to point to its previous element.
// Since a node does not have reference to its previous node, you must store its previous element beforehand.
// You also need another pointer to store the next node before changing the reference. Do not forget to return the new head reference at the end!

var reverseList = function (head) {
  let prev = null;
  //   initialize it to null, like what we want i.e.  Ø ← 1 ← 2 ← 3.
  let curr = head;

  while (curr != null) {
    let nextTemp = curr.next;
    // this temporarily saves the next node
    curr.next = prev;
    // this changes the next nodes pointer to the previous one
    prev = curr;
    // this updates the previous pointer to the current value
    curr = nextTemp;
    // this updates the current pointer to the next one
  }
  return prev;
};
