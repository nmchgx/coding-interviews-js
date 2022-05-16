// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39

function Fibonacci(n) {
  if (n <= 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    let preNum1 = 1
    let preNum2 = 0
    let result = 1
    for (let i = 2; i <= n; i++) {
      result = preNum1 + preNum2
      preNum2 = preNum1
      preNum1 = result
    }
    return result
  }
}