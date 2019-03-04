// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

function judge(sequence, start, end) {
  if (start >= end) {
    return true
  }
  let i = start
  while (sequence[i] < sequence[end]) {
    i++
  }
  let j = i
  while (j < end) {
    if (sequence[j] < sequence[end]) {
      return false
    }
    j++
  }
  return judge(sequence, start, i - 1) && judge(sequence, i, end - 1)
}

function VerifySquenceOfBST(sequence) {
  if (sequence.length === 0) {
    return false
  }
  return judge(sequence, 0, sequence.length - 1)
}