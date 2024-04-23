/* 
94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]
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
 * @return {number[]}
 */

// Approach 1
const inorderTraversal = (root) => {
  let result = [];
  let current = root;
  let stack = [];

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      let node = stack.pop();
      result.push(node.val);

      if (node.right) current = node.right;
    }
  }

  return result;
};

// Approach 2
var inorderTraversalRecursive = (root, result = []) => {
  if (root === null) return null;

  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);
  return result;
};

class Node {
  constructor(val = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('BinaryTree Inorder Traversal', () => {
  test('Ex-1', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    node1.right = node2;
    node2.left = node3;

    const res = inorderTraversal(node1);
    expect(res).toEqual([1, 3, 2]);
  });
});
