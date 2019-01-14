/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  var list = []
  while (head !== null) {
    list.unshift(head.val)
    head = head.next
  }
  return list
}