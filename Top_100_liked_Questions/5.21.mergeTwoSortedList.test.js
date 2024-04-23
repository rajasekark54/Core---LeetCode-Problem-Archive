/* 
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Approach 1
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// Approach 2
function mergeTwoListsIterative(l1, l2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}

class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

describe('Merger Two Sorted Linked List', () => {
  test('Ex-1', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(4);
    node1.next = node2;
    node2.next = node3;

    let node4 = new Node(1);
    let node5 = new Node(3);
    let node6 = new Node(4);
    node4.next = node5;
    node5.next = node6;

    let expected = new Node(1);
    let node7 = new Node(1);
    let node8 = new Node(2);
    let node9 = new Node(3);
    let node10 = new Node(4);
    let node11 = new Node(4);

    expected.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node10;
    node10.next = node11;

    const res = mergeTwoLists(node1, node4);
    console.log(res);
    expect(res).toEqual(expected);
  });
});
