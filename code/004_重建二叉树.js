/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0 || vin.length === 0) {
    return
  }
  var root = pre.shift()
  var index = vin.indexOf(root)
  var node = {
    val: root
  }
  node.left = reConstructBinaryTree(pre, vin.slice(0, index))
  node.right = reConstructBinaryTree(pre, vin.slice(index + 1))
  return node
}