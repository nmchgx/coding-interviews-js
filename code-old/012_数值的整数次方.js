// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power(base, exponent) {
  let result = 1
  let temp = base
  let n = exponent
  if (exponent > 0) {
    n = exponent
  } else if (exponent < 0) {
    if (base === 0) {
      return 0
    }
    n = -exponent
  } else {
    return 1
  }
  while (n !== 0) {
    if (n & 1 !== 0) {
      result *= temp
    }
    temp *= temp
    n >>= 1
  }
  return exponent > 0 ? result : 1 / result
}