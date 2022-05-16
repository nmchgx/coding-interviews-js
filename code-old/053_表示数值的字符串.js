// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

function isNumeric(s) {
  let len = s.length
  let sign = false
  let decimal = false
  let hasE = false
  for (let i = 0; i < len; i++) {
    if (s[i] === 'e' || s[i] === 'E') {
      if (i === len - 1) {
        return false
      }
      if (hasE) {
        return false
      }
      hasE = true
    } else if (s[i] === '+' || s[i] === '-') {
      if (sign && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
        return false
      }
      if (!sign && i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
        return false
      }
      sign = true
    } else if (s[i] === '.') {
      if (hasE || decimal) {
        return false
      }
      decimal = true
    } else if (s[i] < '0' || s[i] > '9') {
      return false
    }
  }
  return true
}
