// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

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
