// 和为S的两个数字

function FindNumbersWithSum(array, sum) {
  let result = []
  let left = 0
  let right = array.length - 1
  while (left < right) {
    if (array[left] + array[right] === sum) {
      result = [array[left], array[right]]
      break
    }
    while (left < right && array[left] + array[right] > sum) {
      right -= 1
    }
    while (left < right && array[left] + array[right] < sum) {
      left += 1
    }
  }
  return result
}
