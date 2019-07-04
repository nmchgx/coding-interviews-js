// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

function FirstNotRepeatingChar(str) {
  let map = {}
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (map.hasOwnProperty(char)) {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }
  let result = -1
  for (let key in map) {
    if (map[key] === 1) {
      result = str.indexOf(key)
      break
    }
  }
  return result
}