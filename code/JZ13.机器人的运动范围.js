// https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8

// 地上有一个 rows 行和 cols 列的方格。坐标从 [0,0] 到 [rows-1,cols-1] 。
// 一个机器人从坐标 [0,0] 的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于 threshold 的格子。
// 例如，当 threshold 为 18 时，机器人能够进入方格 [35,37] ，因为 3+5+3+7 = 18。
// 但是，它不能进入方格 [35,38] ，因为 3+5+3+8 = 19 。请问该机器人能够达到多少个格子？

// 数据范围：0≤threshold≤15 ，1≤rows,cols≤100

// 进阶：空间复杂度 O(nm) ，时间复杂度 O(nm)

function calc(_i, _j) {
  let i = _i;
  let j = _j;
  let sum = 0;
  while (i !== 0) {
    sum += i % 10;
    i = Math.floor(i / 10);
  }
  while (j !== 0) {
    sum += j % 10;
    j = Math.floor(j / 10);
  }
  return sum;
}

function dfs(threshold, rows, cols, i, j, visited) {
  if (i >= rows
    || j >= cols
    || calc(i, j) > threshold
    || visited[i][j]
  ) {
    return 0;
  }

  visited[i][j] = true;

  const result = 1
    + dfs(threshold, rows, cols, i + 1, j, visited)
    + dfs(threshold, rows, cols, i, j + 1, visited);

  return result;
}

function movingCount(threshold, rows, cols) {
  if (threshold <= 0) {
    return 1;
  }

  const visited = Array(rows).fill(false).map(() => Array(cols).fill(false));

  return dfs(threshold, rows, cols, 0, 0, visited);
}

module.exports = {
  movingCount,
};
