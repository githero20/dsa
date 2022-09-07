// You are given the heads of k sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeKLists = function (lists) {
  var mergeTwoLists = function (list1, list2) {
    let l1 = list1;
    let l2 = list2;
    // we start by initializing a pointer to the value just before the head
    let preHead = new ListNode(-1);
    let prev = preHead;
    // we use this to track the initial value of the preHead

    while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
        prev.next = l1;
        l1 = l1.next;
        // on to the next one
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }

    if (l1 === null) {
      prev.next = l2;
    } else {
      prev.next = l1;
    }

    return preHead.next;
  };

  for (let i = 0; (i += 2); i < lists.length) {
    A = list[i];
    B = list[i + 1];
  }
};

// var mergeTwoLists = function (list1, list2) {
//   // Using recursion
//   let l1 = list1;
//   let l2 = list2;

//   // first, start by tackling the base cases
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;

//   if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     // here, we basically keep on merging until we get to a base case, then we return what we find
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l2.next, l1);
//     return l2;
//   }
//   // Time complexity : O(n + m)
//   // Space complexity : O(n + m)
// };

// var mergeTwoLists = function (list1, list2) {
//   let dummyHead = new ListNode(0);
//   let result = dummyHead;
//   //   remember that you cannot modify the current pointer, you can only point it to something else
//   //     that is why we only edit the dummyHead.next and not dummyHead itself
//   let l1 = list1;
//   let l2 = list2;
//   // console.log(l1, "l1")
//   //     console.log(l2, "l2")
//   while (l1 || l2) {
//     if (l1.val <= l2.val) {
//       dummyHead.next = new ListNode(l1.val);
//       dummyHead = dummyHead.next;
//       l1 = l1.next;
//     } else {
//       dummyHead = new ListNode(l2.val);
//       dummyHead = dummyHead.next;
//       l2 = l2.next;
//     }
//   }
//   return result.next;
// };
