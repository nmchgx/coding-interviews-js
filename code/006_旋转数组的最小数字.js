// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

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