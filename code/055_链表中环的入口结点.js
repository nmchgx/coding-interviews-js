// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
/*
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/

function EntryNodeOfLoop(pHead) {
  if (pHead === null || pHead.next === null) {
    return null
  }
  let p1 = pHead
  let p2 = pHead
  while (p2 !== null && p2.next !== null) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) {
      p2 = pHead
      while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
      }
      if (p1 === p2) {
        return p1
      }
    }
  }
  return null
}
