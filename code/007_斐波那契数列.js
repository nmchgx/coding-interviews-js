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