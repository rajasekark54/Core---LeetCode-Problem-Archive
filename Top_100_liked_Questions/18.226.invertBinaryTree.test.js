/* 
226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

Example 1:

            4                                       4
       2         7             ==>            7          2
    1     3   6     9                     9      6    3      1

  
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]
*/

// Approach 1
const invertTree1 = (root) => {
  if (!root) return null;

  invertTree1(root.left);
  invertTree1(root.right);

  let current = root.left;
  root.left = root.right;
  root.right = current;

  return root;
};

// Approach 2
const invertTree2 = (root) => {
  if (!root) return null;

  let tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);

  return root;
};

// Approach 3
const invertTree3 = (root) => {
  if (!root) return null;

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('Invert Binary Tree', () => {
  test('Ex-1', () => {
    const returnNode = (n1, n2, n3, n4, n5, n6, n7) => {
      let node1 = new Node(n1);
      let node2 = new Node(n2);
      let node3 = new Node(n3);
      let node4 = new Node(n4);

      let node5 = new Node(n5);
      let node6 = new Node(n6);
      let node7 = new Node(n7);

      node1.left = node2;
      node1.right = node5;
      node2.left = node3;
      node2.right = node4;

      node5.left = node6;
      node5.right = node7;

      return node1;
    };

    const input = returnNode(4, 2, 1, 3, 7, 6, 9);
    const output = returnNode(4, 7, 9, 6, 2, 3, 1);

    const res = invertTree1(input);
    expect(res).toEqual(output);
  });
});
