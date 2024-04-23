/* 
104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Approach 1
var maxDepth = (root) => {
  if (root === null) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

// Approach 2
const maxDepthIterative = (root) => {
  if (!root) return 0;

  let depth = 0;
  const stack = [{ node: root, depth: 1 }];

  while (stack.length) {
    const { node, depth: currentDepth } = stack.pop();
    depth = Math.max(depth, currentDepth);

    if (node.left) {
      stack.push({ node: node.left, depth: currentDepth + 1 });
    }

    if (node.right) {
      stack.push({ node: node.right, depth: currentDepth + 1 });
    }
  }

  return depth;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('Symmentric Tree', () => {
  test('Ex-1', () => {
    let node1 = new Node(3);
    let node2 = new Node(9);
    let node3 = new Node(20);
    let node4 = new Node(15);
    let node5 = new Node(7);

    node1.left = node2;
    node1.right = node3;
    node3.left = node4;
    node3.right = node5;

    const res = maxDepth(node1);
    expect(res).toEqual(3);
  });
});
