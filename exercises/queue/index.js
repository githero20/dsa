// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
    //this creates a new array and assigns it as a property to our queue instance
  }
  // this function (constructor) is called whenever a new instance of this class is called

  add(record) {
    this.data.unshift(record);
  }
  // this adds the property to the top of the array.

  remove() {
    return this.data.pop();
  }
  //this removes it from the end of the array
}

module.exports = Queue;
