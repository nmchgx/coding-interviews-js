function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) {
    return 0
  }
  var left = 0
  var right = rotateArray.length - 1
  var mid = 0
  while (rotateArray[left] >= rotateArray[right]) {
    if (left + 1 === right) {
      mid = right
      break
    }
    mid = left + Math.floor((right - left) / 2)
    if (rotateArray[left] <= rotateArray[mid]) {
      left = mid
    } else if (rotateArray[mid] <= rotateArray[right]) {
      right = mid
    }
  }
  return rotateArray[mid]
}