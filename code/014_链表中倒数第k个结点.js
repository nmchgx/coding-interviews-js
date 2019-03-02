// 输入一个链表，输出该链表中倒数第k个结点。

/*
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/
function FindKthToTail(head, k) {
  if (head === null || k <= 0) {
    return null
  }
  let pre = head
  let last = head
  for (let index = 1; index < k; index++) {
    if (pre.next !== null) {
      pre = pre.next
    } else {
      return null
    }
  }
  while (pre.next !== null) {
    pre = pre.next
    last = last.next
  }
  return last
}