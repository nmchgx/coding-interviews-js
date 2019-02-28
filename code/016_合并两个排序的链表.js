/*
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/
function Merge(pHead1, pHead2) {
  if (pHead1 === null) {
    return pHead2
  }
  if (pHead2 === null) {
    return pHead1
  }
  let pHeadNew = null
  let p = null
  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val <= pHead2.val) {
      if (pHeadNew === null) {
        p = pHead1
        pHeadNew = p
      } else {
        p.next = pHead1
        p = p.next
      }
      pHead1 = pHead1.next
    } else {
      if (pHeadNew === null) {
        p = pHead2
        pHeadNew = p
      } else {
        p.next = pHead2
        p = p.next
      }
      pHead2 = pHead2.next
    }
  }
  if (pHead1 === null) {
    p.next = pHead2
  } else if (pHead2 === null) {
    p.next = pHead1
  }
  return pHeadNew
}