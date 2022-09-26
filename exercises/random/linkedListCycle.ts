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

let myList = new ListNode(4)