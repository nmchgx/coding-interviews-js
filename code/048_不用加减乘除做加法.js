// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

function Add(num1, num2) {
  while (num2 !== 0) {
    let temp = num1 ^ num2
    num2 = (num1 & num2) << 1
    num1 = temp
  }
  return num1
}
