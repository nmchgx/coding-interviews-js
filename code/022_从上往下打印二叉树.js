// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/*
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
*/
function PrintFromTopToBottom(root) {
  let list = []
  let result = []
  if (root !== null) {
    list.push(root)
  }
  while (list.length !== 0) {
    let node = list.shift()
    if (node.left !== null) {
      list.push(node.left)
    }
    if (node.right !== null) {
      list.push(node.right)
    }
    result.push(node.val)
  }
  return result
}