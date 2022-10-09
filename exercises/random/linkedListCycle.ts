/**
 */

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
}

// https://leetcode.com/problems/linked-list-cycle/

function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode | null = head;
    
    while (head && fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        
        if (head === fast) return true;
    }
    
    return false;
    
};

// let myList = new ListNode(4)

// You can basically create a LinkedList with an object if you have objects nested in each other.
// Sort of like a nested dictionary

// [3,2,0,-4]
// 3 -> 2^ -> 0 -> 4 -> 2* 

// Set<value> // set js O(1)


// head = 3; first node in linked list
// check if exist in set 
    // if it does -> i found a cycle 
      // else -> add to the Set


// {3, 2, 0,4}
//                      *
// 3 -> 2^ -> 0 -> 4 -> 2*

// stuct Node {
//      val : number
//     next: null | Node
// }

// const cycleLink = {
//   val : 2,
//   next: {
//     val : 0,
//     next: {
//       val: -4,
//       next: null 
//     },
//   }
// }

// cycleLink.next.next.next = cycleLink;

// const data = {
//   val: 3,
//   next: cycleLink
// }



// const findCycleOne = (head) => {
//     // ecvery node encountered
//     // O(n) -> space
//     const cache = new Set();    
//     cache.add(head.val);
//     // O(n) -> time
//     while(head.next != null){
//         // moving to the next
//         head = head.next
//         if(cache.has(head.val)){
//           return true
//         }else{
//           cache.add(head.val);
//         }
//     }
//     return false;
// }


// // 2-pointer (hare & tortoise)

// const findCycletwo = (head) => {

// }


// console.log(findCycle(data))
