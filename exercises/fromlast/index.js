// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let v1 = list.head;
  let v2 = list.head;

  for (n; n > 0; n--) {
    v2 = v2.next;
  }

  //   while (n > 0) {
  //     v2 = v2.next;
  //     n--;
  //   }
  // this is a great way to get to the 3rd position from this.head, without using getAt()

  while (v2.next) {
    v1 = v1.next;
    v2 = v2.next;
  }

  return v1;
}

// set both pointers to the first node
// move the second one by n
// now move slow and fast by one element at a time
// continue this until fast is pointing at the last element on the list

module.exports = fromLast;
