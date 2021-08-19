// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  //My solution
  // peek() {
  //   return parseInt(this.data.slice(-1));
  // }

  //His solution
  peek() {
    return this.data[this.data.length - 1];
  }
}

// const q = new Queue();
// q.add(2);
// q.add(3);
// q.add(4);
// q.add(5);
// q.remove();
// q.remove();
// q.peek();

module.exports = Queue;
