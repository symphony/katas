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
const findNext = (node1, node2) => {
  return [node1, node2].sort((a, b) =>a.val - b.val)[0];  
};

var mergeTwoLists = function(list1, list2) {
    const temp1 = list1.next;
    const temp2 = list2.next;
    
    list1.next = findNext(list1.next, list2);
    list1.next.next = findNext()
}; 
