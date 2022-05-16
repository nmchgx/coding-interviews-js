// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function NumberOf1(n) {
  let count = 0
  let index = 1
  while (index) {
    if (n & index) {
      count += 1
    }
    index = index << 1
  }
  return count
}