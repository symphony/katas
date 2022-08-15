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
const sortLists = (node1, node2) => {
  if (node1.next === null) return node1.next = node2;
  const [first, second] = [node1, node2].sort((a, b) => a.next.val - b.val);
  const rest = second.next;
  second.next = first.next;
  first.next = second;
  if (rest) sortLists(first.next, rest);
};

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2 || null;

  const [first, second] = [list1, list2].sort((a, b) => a.val - b.val);

  sortLists(first, second);
  return first;
};
