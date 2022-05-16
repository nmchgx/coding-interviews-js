// 统计一个数字在排序数组中出现的次数。

function GetNumberOfK(data, k) {
  return findNumber(data, k + 0.5) - findNumber(data, k - 0.5)
}

function findNumber(data, k) {
  let start = 0
  let end = data.length - 1
  while (start <= end) {
    let mid = Math.floor((end + start) / 2)
    if (data[mid] < k) {
      start = mid + 1
    } else if (data[mid] > k) {
      end = mid - 1
    }
  }
  return start
}