/* 
543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
    
         1
      2     3
    4   5

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1
*/

const diameterOfBinaryTree = (root) => {
  let max = 0;

  const maxDepth = (node) => {
    if (!node) return 0;

    let left = maxDepth(node.left);
    let right = maxDepth(node.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  };

  maxDepth(root);
  return max;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('isPalindrome', () => {
  test('Ex-1', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;

    expect(diameterOfBinaryTree(node1)).toEqual(3);
  });
});
