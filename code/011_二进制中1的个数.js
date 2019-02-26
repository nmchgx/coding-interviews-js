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