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