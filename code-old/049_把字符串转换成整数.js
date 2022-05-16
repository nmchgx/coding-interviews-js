// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。

function StrToInt(str) {
  let sum = 0
  let flag = 1
  for (let i = 0; i < str.length; i++) {
    if (isValid(str[i], i)) {
      if (str[i] === '+') {
        flag = 1
        continue
      }
      if (str[i] === '-') {
        flag = -1
        continue
      }
      sum = sum * 10 + parseInt(str[i])
    } else {
      sum = 0
      break
    }
  }
  return sum * flag
}

function isValid(s, i) {
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-'].indexOf(s) > -1) {
    if (i !== 0) {
      if (s === '+' || s === '') {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  } else {
    return false
  }
}
