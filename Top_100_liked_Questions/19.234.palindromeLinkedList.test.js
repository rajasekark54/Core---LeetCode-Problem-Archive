/* 
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
 1 - 2 - 2 -1
Input: head = [1,2,2,1]
Output: true

Example 2:
 1 - 2
Input: head = [1,2]
Output: false
*/

var isPalindrome = function (head) {
  if (!head) return true;

  let current = head;
  const traverse = (node) => {
    if (!node) return true;
    const lastNode = traverse(node.next);
    const isSame = lastNode && current.val === node.val;
    current = current.next;
    return isSame;
  };

  return traverse(current);
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('isPalindrome', () => {
  test('Ex-1', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(2);
    let node4 = new Node(1);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    const res = isPalindrome(node1);
    expect(res).toEqual(true);
  });
});
