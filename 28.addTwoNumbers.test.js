/* 
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  let list = new ListNode();
  let head = list;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return list.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

describe('Add Two Numbers', () => {
  test('Ex-1', () => {
    let node1 = new ListNode(2);
    let node2 = new ListNode(4);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;

    let node4 = new ListNode(5);
    let node5 = new ListNode(6);
    let node6 = new ListNode(4);
    node4.next = node5;
    node5.next = node6;

    let expected = new ListNode(7);
    let node7 = new ListNode(0);
    let node8 = new ListNode(8);
    expected.next = node7;
    node7.next = node8;

    const res = addTwoNumbers(node1, node4);
    expect(res).toEqual(expected);
  });
});
