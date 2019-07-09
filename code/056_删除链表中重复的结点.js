// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
/*
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/

function deleteDuplication(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead
  }
  let head = new ListNode(0)
  head.next = pHead
  let pre = head
  let last = head.next
  while (last !== null) {
    if (last.next !== null && last.val === last.next.val) {
      while (last.next !== null && last.val === last.next.val) {
        last = last.next
      }
      pre.next = last.next
      last = last.next
    } else {
      pre = pre.next
      last = last.next
    }
  }
  return head.next
}
