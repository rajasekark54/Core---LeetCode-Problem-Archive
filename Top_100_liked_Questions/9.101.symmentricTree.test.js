/* 
101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
            1
       2          2
    3     4    4     3


Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
             1
       2          2
          3          3

Input: root = [1,2,2,null,3,null,3]
Output: false
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
 * @return {boolean}
 */
var isSymmetric = (root) => {
  if (!root) return root;

  let s1 = [root.left];
  let s2 = [root.right];

  while (s1.length || s2.length) {
    let actual = s1.pop();
    let mirror = s2.pop();

    if (!actual && !mirror) continue;
    if (actual.val !== mirror.val) return false;

    s1.push(actual.left);
    s2.push(mirror.right);
    s1.push(actual.right);
    s2.push(mirror.left);
  }

  return true;
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
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);

    let node5 = new Node(2);
    let node6 = new Node(4);
    let node7 = new Node(3);

    node1.left = node2;
    node2.left = node3;
    node2.right = node4;

    node1.right = node5;
    node5.left = node6;
    node5.right = node7;

    const res = isSymmetric(node1);
    expect(res).toEqual(true);
  });
});
