// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
/*
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
*/

var pre

function Convert(pRootOfTree) {
  if (pRootOfTree === null) {
    return null
  }
  pre = null
  helper(pRootOfTree)
  let head = pRootOfTree
  while (head.left) {
    head = head.left
  }
  return head
}

function helper(current) {
  if (current === null) {
    return
  }
  helper(current.left)
  current.left = pre
  if (pre) {
    pre.right = current
  }
  pre = current
  helper(current.right)
}