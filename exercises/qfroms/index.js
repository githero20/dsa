// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
      //this pops out the last element in the first stack and pushes it to the second
      //for as long as the peek returns true, i.e. there's something there
    }
    const record = this.second.pop();
    //this records the last item in the second array

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    //works like the one above, but inversely

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
      //this pops out the last element in the first stack and pushes it to the second
      //for as long as the peek returns true, i.e. there's something there
    }
    const record = this.second.peek();
    //this records the last item in the second array
    // note the difference between this and the one earlier,
    // 'peek' is the difference

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    //works like the one above, but inversely

    return record;
  }
}

module.exports = Queue;
