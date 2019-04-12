// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(input, k) {
  const len = input.length
  let result = []
  if (k > len) {
    return result
  }
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (input[i] > input[j]) {
        let temp = input[i]
        input[i] = input[j]
        input[j] = temp
      }
    }
    result.push(input[i])
  }
  return result
}