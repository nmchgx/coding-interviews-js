// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

function FindNumsAppearOnce(array) {
  if (!array || array.length < 2) {
    return []
  }

  let all = 0
  array.forEach(item => {
    all ^= item
  })

  if (all === 0) {
    return []
  }
  let index = 0
  while ((all & 1) === 0) {
    all >>= 1
    index += 1
  }

  let num1 = 0
  let num2 = 0
  array.forEach(item => {
    if (isBit(item, index)) {
      num1 ^= item
    } else {
      num2 ^= item
    }
  })

  return [num1, num2]
}

function isBit(num, index) {
  num >>= index
  return num & 1
}
