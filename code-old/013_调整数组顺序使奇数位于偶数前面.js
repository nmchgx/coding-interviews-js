// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array) {
  let list1 = []
  let list2 = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 1) {
      list1.push(array[index])
    } else {
      list2.push(array[index])
    }
  }
  return list1.concat(list2)
}