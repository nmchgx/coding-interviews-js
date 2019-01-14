function Find(target, array) {
  for (var i = array.length - 1, j = 0; i >= 0 && j <= array[i].length - 1;) {
    if (array[i][j] === target) {
      return true
    } else if (array[i][j] > target) {
      i--
    } else {
      j++
    }
  }
  return false
}