// https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6

// 给定节点数为 n 的二叉树的前序遍历和中序遍历结果，请重建出该二叉树并返回它的头结点。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建出如下图所示。
// 提示:
// 1.vin.length == pre.length
// 2.pre 和 vin 均无重复元素
// 3.vin出现的元素均出现在 pre里
// 4.只需要返回根结点，系统会自动输出整颗树做答案对比

// 数据范围：0n≤2000，节点的值 −10000≤val≤10000
// 要求：空间复杂度 O(n)，时间复杂度 O(n)

/*
  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
*/

function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }
  const rootValue = pre.shift();
  const index = vin.indexOf(rootValue);
  const node = {
    val: rootValue,
    left: reConstructBinaryTree(pre, vin.slice(0, index)),
    right: reConstructBinaryTree(pre, vin.slice(index + 1)),
  };
  return node;
}

module.exports = {
  reConstructBinaryTree,
};
