// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

function MoreThanHalfNum_Solution(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  let num = numbers[0]
  let count = 1
  for (let index = 0; index < numbers.length; index++) {
    if (count === 0) {
      num = numbers[index]
      count = 1
    }
    if (num === numbers[index]) {
      count += 1
    } else {
      count -= 1
    }
  }
  count = 0
  for (let index = 0; index < numbers.length; index++) {
    if (num === numbers[index]) {
      count += 1
    }
  }
  return (count > numbers.length / 2) ? num : 0
}