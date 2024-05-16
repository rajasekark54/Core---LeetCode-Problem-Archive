/* 
160. Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

a1 a2 
          c1 c2 c3
b1 b2 b3 

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
*/

const getIntersectionNode = (headA, headB) => {
  let set = new Set();
  let node1 = headA;
  let node2 = headB;

  while (node1) {
    set.add(node1);
    node1 = node1.next;
  }

  while (node2) {
    if (set.has(node2)) return node2;
    node2 = node2.next;
  }

  return null;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('Intersection of Two Linked List', () => {
  test('Ex-1', () => {
    let node1 = new Node('a1');
    let node2 = new Node('a2');
    node1.next = node2;

    let node3 = new Node('b1');
    let node4 = new Node('b2');
    let node5 = new Node('b3');
    node3.next = node4;
    node4.next = node5;

    let node6 = new Node('c1');
    let node7 = new Node('c2');
    let node8 = new Node('c3');
    node6.next = node7;
    node7.next = node8;

    node2.next = node6;
    node4.next = node6;

    const res = getIntersectionNode(node1, node3);
    expect(res).toEqual(node6);
  });
});
