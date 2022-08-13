/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let current = head
  const nodesArr = []
  while (current) {
      nodesArr.push(current)
      current = current.next
  }
  if (n === nodesArr.length) return head.next
  nodesArr[nodesArr.length - 1 - n].next = nodesArr[nodesArr.length - 1 - n].next.next
  return head
};

// [1,2,3] , n = 3

// []