// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let v1 = list.head;
  let v2 = list.head;

  while (v2.next && v2.next.next) {
    v1 = v1.next;
    v2 = v2.next.next;
    if (v1 === v2) {
      return true;
    }
  }
  return false;
}
// follow same iteration as before (linkedlist), but check after each one to see if slow, fast are on the same node. If they are, then it's circular. If instead, fast's next, next.next is null, then the linkedlist is not circular.

module.exports = circular;
