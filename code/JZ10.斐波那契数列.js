// https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3

// 大家都知道斐波那契数列，现在要求输入一个正整数 n ，请你输出斐波那契数列的第 n 项。

// 数据范围：1≤n≤40
// 要求：空间复杂度 O(1)，时间复杂度 O(n)，本题也有时间复杂度 O(logn) 的解法

function Fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  let x = 1;
  let y = 1;
  let sum = 2;
  for (let i = 3; i <= n; i += 1) {
    sum = x + y;
    x = y;
    y = sum;
  }
  return sum;
}
