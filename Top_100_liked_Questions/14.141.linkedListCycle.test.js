/* 
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
    3 2 0 4 ---
      ^        |
      |        |
       ---------
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
    1 2 ------
    ^        |
    |        |
    ---------
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
    1
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

const hasCycle = (head) => {
  let set = new Set();
  let current = head;

  while (current.next) {
    if (set.has(current)) return true;
    set.add(current);
    current = current.next;
  }

  return false;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('Linked List Cycle', () => {
  test('Ex-1', () => {
    let node1 = new Node(3);
    let node2 = new Node(2);
    let node3 = new Node(0);
    let node4 = new Node(-4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    const res = hasCycle(node1);
    expect(res).toEqual(true);
  });

  test('Ex-2', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    node1.next = node2;
    node2.next = node1;

    const res = hasCycle(node1);
    expect(res).toEqual(true);
  });

  test('Ex-4', () => {
    let node1 = new Node(1);
    const res = hasCycle(node1);
    expect(res).toEqual(false);
  });
});
