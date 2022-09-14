// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2); i.e. max size is 2 items
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// /**
//  * @param {number} capacity
//  */
// Easy method using hashmaps
var LRUCache = function (capacity) {
  // first we initialize our ordered hashMap, P.S. the Map() is ordered
  //   since LRUCache is basically a class, we're using the 'this' property to save variables all through the class
  this.cache = new Map();
  this.capacity = capacity;
  //this saves the max allowed capacity of the map
};

// /**
//  * @param {number} key
//  * @return {number}
//  */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  // to get a key, we need to delete it and re-add it first before returning it
  // this way, the order will change and it becomes the most recently used
  // most recently used means last (key, value) pair in the map while lru means first
  // remember we must order it based on Least Recently Used.

  const k = this.cache.get(key);
  //   first store the value of the key
  this.cache.delete(key);
  //   then delete the key
  this.cache.set(key, k);
  //   now add it back i.e. key, value
  return this.cache.get(key);
};

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
LRUCache.prototype.put = function (key, value) {
  // first we check if it already has it, if it does then we delete to avoid duplicates
  if (this.cache.has(key)) this.cache.delete(key);

  //   now we add it. This automatically adds to the end of the map, making it the most recently used
  this.cache.set(key, value);

  //   now to prevent it from getting larger than the specified capacity on a new addition
  if (this.cache.size > this.capacity) {
    //   delete the first item's key
    let theKey = this.cache.keys().next().value;
    // keys().next().value returns the first item's key
    this.cache.delete(theKey);

    // const [myKeys] = myMap.keys();
    // this also gets the first item's key
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let myMap = new Map();
// myMap.set("One", 1);
// myMap.set("Two", 2);
// myMap.set("Three", 3);

// const [myKeys] = myMap.keys();

// console.log(myKeys);

// Using a Double Linked List, O(1) time O(capacity) space
// https://leetcode.com/problems/lru-cache/discuss/178988/HashMap%2BDoubleLinkedList-in-JavaScript
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this._capacity = capacity;
  this._count = 0;
  this._head = null;
  this._tail = null;
  this._hashTable = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this._hashTable[key]) {
    const { value } = this._hashTable[key];
    const { prev, next } = this._hashTable[key];
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev || next.prev;
    }

    if (this._tail === this._hashTable[key]) {
      this._tail = prev || this._hashTable[key];
    }

    this._hashTable[key].prev = null;
    if (this._head !== this._hashTable[key]) {
      this._hashTable[key].next = this._head;
      this._head.prev = this._hashTable[key];
    }

    this._head = this._hashTable[key];

    return value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this._hashTable[key]) {
    this._hashTable[key].value = value;
    this.get(key);
  } else {
    this._hashTable[key] = { key, value, prev: null, next: null };
    if (this._head) {
      this._head.prev = this._hashTable[key];
      this._hashTable[key].next = this._head;
    }

    this._head = this._hashTable[key];

    if (!this._tail) {
      this._tail = this._hashTable[key];
    }

    this._count += 1;
  }

  if (this._count > this._capacity) {
    let removedKey = this._tail.key;

    if (this._tail.prev) {
      this._tail.prev.next = null;
      this._tail = this._tail.prev;
      this._hashTable[removedKey].prev = null;
    }

    delete this._hashTable[removedKey];

    this._count -= 1;
  }
};

// Using a Double Linked List, and a class component
// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.count = 0;
//     this.head = null;
//     this.tail = null;
//     this.hash = {};
//   }

//   get(key) {
//     if (this.hash[key]) {
//       const { value, prev, next } = this.hash[key];
//       //delete the connections of this node, get ready to move this node to head
//       if (prev) {
//         prev.next = next;
//       }
//       if (next) {
//         next.prev = prev;
//       }
//       //if the get value was the next to be removed
//       if (this.tail === this.hash[key]) {
//         this.tail = prev || this.hash[key];
//       }

//       //redefine prev
//       this.hash[key].prev = null;

//       if (this.head !== this.hash[key]) {
//         this.hash[key].next = this.head;
//         this.head.prev = this.hash[key];
//       }
//       //redefine head
//       this.head = this.hash[key];
//       return value;
//     }
//     return -1;
//   }

//   put(key, value) {
//     //if key already exists
//     if (this.hash[key]) {
//       this.hash[key].value = value;
//       //update most recently used by calling get function
//       this.get(key);
//     } else {
//       //create new node
//       this.hash[key] = {
//         key: key,
//         value: value,
//         prev: null,
//         next: null,
//       };
//       //if there is a head, update the bindings
//       if (this.head) {
//         this.hash[key].next = this.head;
//         this.head.prev = this.hash[key];
//       }
//       //redefine head
//       this.head = this.hash[key];

//       //if no tail, make new head tail
//       if (!this.tail) {
//         this.tail = this.hash[key];
//       }

//       this.count += 1;
//     }

//     if (this.count > this.capacity) {
//       let removeKey = this.tail.key;
//       //remove tail bindings
//       if (this.tail.prev) {
//         this.tail.prev.next = null;
//         this.tail = this.tail.prev;
//       }

//       //delete this node from hashTable
//       delete this.hash[removeKey];
//       this.count -= 1;
//     }
//   }
// }
