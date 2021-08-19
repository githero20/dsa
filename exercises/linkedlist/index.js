// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  //for the last node, next = null
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // a head property is always pointing to the first node of the LinkedList
  // this creates an empty list with no node, and a null head property.

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }
  // this returns the first node on the list
  // this.head is always going to point to the first node on the list

  getLast() {
    if (!this.head) {
      return null;
    }
    // if no head, then it is null i.e. empty node

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
        // if there's nothing next, then return the node
      }
      node = node.next;
      // while node exists, move to the next
    }
  }
  clear() {
    return (this.head = null);
  }
  // The LinkedList is only concerned with the head, empty the head, reassign it to null, and the node will be empty

  removeFirst() {
    if (!this.head) {
      return;
    }
    // if no head, then return empty i.e. empty node
    return (this.head = this.head.next);
    // this switches the head to the next node, even if there's only one node it switches to the next (null)
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
      //if there is no 2nd node, it means only one node on the list
      // It then deletes the head itself (i.e. the one node on the list)
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
      // while node.next exists, the head pointer keeps shifting to the end
    }
    previous.next = null;
    // when there's nothing next, i.e. at the end of the list (node.next doesn't exist)
    // we just easily say previous.next is null to remove that last element
  }

  insertLast(data) {
    const last = this.getLast();
    // last could either be a node or null
    if (last) {
      //Last is an existing node
      last.next = new Node(data);
    } else {
      // last is null, the chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // *[Symbol.iterator]() {
  //   let node = this.head;
  //   while (node) {
  //     yield node;
  //     node = node.next;
  //   }
  // }

  *[Symbol.iterator]() {
    // this defines a generator function with a key of symbol.generator
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
    //when you call next first, it runs until you get to the yield statement, then execution of the function is paused
    //When you call it again, with an argument, it replaces the yield statement with the argument.
  }
}
module.exports = { Node, LinkedList };

function* numbers() {
  const result = 1 + 1;

  return 20 + (yield result);
}
