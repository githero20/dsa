// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// DFS

var invertTree = function (root) {
  if (root == null) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

var invertTree = function (root) {
  let nodes = [];
  let node = root;
  while (node != null) {
    let left = node.left === undefined ? null : node.left;
    let right = node.right === undefined ? null : node.right;
    node.right = left;
    if (node.right !== null) {
      nodes.push(node.right);
    }
    node.left = right;
    if (node.left !== null) {
      nodes.push(node.left);
    }
    node = nodes.pop();
  }
  return root;
};
