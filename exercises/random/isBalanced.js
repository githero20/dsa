// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than

// var isBalanced = function (root) {
//   if (root.val === null) return true;
// };

// Need to learn Linked Lists and DFS, BFS

var isBalanced = function (root) {
  let dfs = function (node) {
    if (!node) return 0;
    let left = 1 + dfs(node.left);
    let right = 1 + dfs(node.right);
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right);
  };

  return dfs(root) == Infinity ? false : true;
};
