/* 
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
  1 2 3 4 5 
  5 4 3 2 1 (Reverse)
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
 1 2
 2 1(Reverse)
Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
*/

const reverseList = (head) => {
  let current = head;
  let previous = null;

  while (current) {
    let tmp = current.next;
    current.next = previous;
    previous = current;
    current = tmp;
  }

  return previous;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('Linked List Cycle', () => {
  test('Ex-1', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    let expected = new Node(5);
    let node6 = new Node(4);
    let node7 = new Node(3);
    let node8 = new Node(2);
    let node9 = new Node(1);

    expected.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;

    const res = reverseList(node1);
    expect(res).toEqual(expected);
  });
});
