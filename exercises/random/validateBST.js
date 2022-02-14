// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a root contains only roots with keys less than the root's key.
// The right subtree of a root contains only roots with keys greater than the root's key.
// Both the left and right subtrees must also be binary search trees.

var validateBST = function (node, min, max) {
  //   remember, with recursion first we create our base cases
  if (node === null) {
    return true;
    //   an empty BST is also valid
  }

  if (min !== null && node.val <= min) return false;

  if (max !== null && node.val >= max) return false;

  return (
    validateBST(node.left, min, node.val) && //this validates the left tree side
    validateBST(node.right, node.val, max) // this validates the right side
  );
  // if both together return true, then it's passed.
};

var isValidBST = function (root) {
  return validateBST(root, null, null);
  //   set min, max to null instead of -infinity, +infinity
};
