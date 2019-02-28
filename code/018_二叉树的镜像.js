/*
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
*/
function Mirror(root) {
  if (root === null) {
    return null
  }
  let p = root.right
  root.right = root.left
  root.left = p
  if (root.left !== null) {
    Mirror(root.left)
  }
  if (root.right !== null) {
    Mirror(root.right)
  }
}