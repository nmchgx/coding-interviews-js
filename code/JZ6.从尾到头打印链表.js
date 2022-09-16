// https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035

// 输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。
// 如输入{1,2,3}的链表如下图:
// 返回一个数组为[3,2,1]

// 0 <= 链表长度 <= 10000

/*
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/

function printListFromTailToHead(head) {
  const list = [];
  while (head !== null) {
    list.unshift(head.val);
    head = head.next;
  }
  return list;
}
