var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  dfs(root);

  return diameter;

  function dfs(node, level) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    // update diameter at every node
    diameter = Math.max(diameter, left + right);

    // update the largest number of edge so far
    return 1 + Math.max(left, right);
  }
};

// recursive solution
// https://leetcode.com/problems/diameter-of-binary-tree/discuss/101148/Intuitive-Javascript-Solution
