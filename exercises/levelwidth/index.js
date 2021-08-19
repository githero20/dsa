// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counter = [0];
  const arr = [root, "e"];
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "e") {
      counter.push(0);
      arr.push("e");
    } else {
      arr.push(...node.children);
      counter[counter.length - 1]++;
      // this increments the last value in the counters array
    }
  }

  return counter;
}

module.exports = levelWidth;
