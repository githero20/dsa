// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let v1 = list.head; // list.getFirst();
  let v2 = list.head;

  // if (!v2.next.next) {
  //   return;
  // }

  while (v2.next && v2.next.next) {
    v1 = v1.next;
    v2 = v2.next.next;
  }

  return v1;
}

// Define 2 variables
// Point them at the first node
// Move the first one (slow) by 1 node, for every step of the while loop
// Move the second one (fast) by 2 nodes, for every step of the while loop
// Check to see if the 2nd one (fast) has space for 2 steps forward.
// If not, i.e. if it has reached the end of the list, then slow is at the middle of it, since it moves half as fast.
// return slow's node as the midpoint

module.exports = midpoint;
