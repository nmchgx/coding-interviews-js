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