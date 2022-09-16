// https://www.nowcoder.com/practice/2a49359695a544b8939c77358d29b7e6

// 请设计一个函数，用来判断在一个n乘m的矩阵中是否存在一条包含某长度为len的字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
// 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

// 数据范围：0≤n,m≤20 , 1≤len≤25

function dfs(matrix, wordList, i, j, index) {
  if (i < 0
    || i >= matrix.length
    || j < 0
    || j >= matrix[0].length
    || matrix[i][j] !== wordList[index]
  ) {
    return false;
  }
  if (index === wordList.length - 1) {
    return true;
  }

  const temp = matrix[i][j];
  matrix[i][j] = '*';
  const result = dfs(matrix, wordList, i + 1, j, index + 1)
  || dfs(matrix, wordList, i - 1, j, index + 1)
  || dfs(matrix, wordList, i, j + 1, index + 1)
  || dfs(matrix, wordList, i, j - 1, index + 1);
  matrix[i][j] = temp;

  return result;
}

function hasPath(matrix, word) {
  const wordList = word.split('');
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (dfs(matrix, wordList, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  hasPath,
};
