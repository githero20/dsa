// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.

// There are two basic kinds of traversals on a tree or a graph. One is where we explore the tree in a depth first manner i.e. one branch at a time.
// The other one is where we traverse the tree breadth-wise i.e. we explore one level of the tree before moving on to the next one.
// For trees, we have further classifications of the depth first traversal approach called preorder, inorder, and the postorder traversals.
// Breadth first approach to exploring a tree is based on the concept of the level of a node. The level of a node is its depth or distance from the root node.
// We process all the nodes on one level before moving on to the next one.

// Now that we have the basics out of the way, it's pretty evident that the problem statement strongly hints at a breadth first kind of a solution.
// We need to link all the nodes together which lie on the same level and the level order or the breadth first traversal gives us access to all such nodes.

// Level order traversal, I prefer this
var connect = function (root) {
  if (root === null) return root;

  //   initialise a queue data structure containing just the root of the tree
  let q = [root];
//   q.push(root);

  //   now, loop through the outer level, i.e. from level to level
  while (q.length > 0) {
    let n = q.length;

    //   now inside that level, iterate over all the nodes
    for (let i = 0; i < n; i++) {
        // the node is gotted from the q array, i.e. the root from before
      let node = q.shift();

      if (i < n - 1) node.next = q[0];
      // this ensures we don't estabish pointers beyond the end of a level

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      // this adds the children of the node i.e. left and right to the back of the queue, just after the node itself
    }
  }
  return root;
};
// Time: O(N), Space: O(N)

// Another Method, using previously established pointers
var connect = function (root) {
  if (root === null) return root;

  // now we start with the root node, remember that on the first level there are no next pointers to the left or right
  let extremeLeft = root;

  while (extremeLeft.left !== null) {
    let head = extremeLeft;
    // we're now in the second level

    while (head !== null) {
      // now we set the right element
      head.left.next = head.right;

      if (head.next != null) {
        head.right.next = head.next.left;
      }
      // this sets the right to the next left, connecting to the next element in the node
      head = head.next;
    }
    // now on to the next level
    extremeLeft = extremeLeft.left;
  }
  return root;
};
// Time: O(N), Space: O(1)

// VERSION 2
// Given a binary tree
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.

var connect = function (root) {
  if (root === null) return root;

  let leftMost = root;

  while (leftMost.left !== null) {
    let head = leftMost;

    while (head !== null) {}
  }
};
