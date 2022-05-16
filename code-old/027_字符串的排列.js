// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

var resultList

function Permutation(str) {
  resultList = []
  if (str !== null && str !== '') {
    helper(str.split(''), 0)
    resultList.sort()
  }
  return resultList
}

function helper(list, i) {
  if (i === list.length - 1) {
    resultList.push(list.slice().join(''))
  } else {
    let charHash = []
    for (let j = i; j < list.length; j++) {
      if (j === i || charHash.indexOf(list[j]) === -1) {
        charHash.push(list[j])
        let temp = list[i]
        list[i] = list[j]
        list[j] = temp
        helper(list, i + 1)
        temp = list[i]
        list[i] = list[j]
        list[j] = temp
      }
    }
  }
}