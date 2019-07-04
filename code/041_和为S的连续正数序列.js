// 和为S的连续正数序列

function FindContinuousSequence(sum) {
  let result = []
  let left = 1
  let right = 2
  while (left < right) {
    let currentSum = ((right + left) * (right - left + 1)) / 2
    if (sum === currentSum) {
      let list = []
      for (let i = left; i <= right; i++) {
        list.push(i)
      }
      result.push(list)
      left += 1
    } else if (currentSum < sum) {
      right += 1
    } else {
      left += 1
    }
  }
  return result
}
