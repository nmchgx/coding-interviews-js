// 输入一个链表，反转链表后，输出新链表的表头。

/*
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/
function ReverseList(pHead) {
  let pPrev = null
  let pNext = null
  while (pHead !== null) {
    pNext = pHead.next
    pHead.next = pPrev
    pPrev = pHead
    pHead = pNext
  }
  return pPrev
}