// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)

/*
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
*/

var resultList
var list

function FindPath(root, expectNumber) {
  resultList = []
  list = []
  if (root === null) {
    return resultList
  }
  dfs(root, expectNumber)
  return resultList
}

function dfs(root, expectNumber) {
  list.push(root.val)
  if (expectNumber == root.val && root.left == null && root.right == null) {
    resultList.push(list.slice())
  } else {
    if (root.left != null) {
      dfs(root.left, expectNumber - root.val)
    }
    if (root.right != null) {
      dfs(root.right, expectNumber - root.val)
    }
  }
  list.pop()
}