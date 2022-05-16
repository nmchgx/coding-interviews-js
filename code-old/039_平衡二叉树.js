// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
/*
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
*/

function IsBalanced_Solution(pRoot) {
  if (pRoot === null) {
    return true
  }
  return Math.abs(maxDepth(pRoot.left) - maxDepth(pRoot.right)) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}

function maxDepth(root) {
  if (root === null) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
