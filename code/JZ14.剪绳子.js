// https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8

// 给你一根长度为 n 的绳子，请把绳子剪成整数长的 m 段（ m 、 n 都是整数， n > 1 并且 m > 1 ， m <= n ），
// 每段绳子的长度记为 k[1],...,k[m] 。请问 k[1]*k[2]*...*k[m] 可能的最大乘积是多少？
// 例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18 。

// 数据范围：2≤n≤60
// 进阶：空间复杂度 O(1) ，时间复杂度 O(n)

// 公式
function cutRope(number) {
  if (number === 2 || number === 3) {
    return number - 1;
  }
  if (number % 3 === 0) {
    return 3 ** Math.floor(number / 3);
  }
  if (number % 3 === 1) {
    return 4 * (3 ** Math.floor((number - 4) / 3));
  }
  if (number % 3 === 2) {
    return 2 * (3 ** Math.floor((number - 2) / 3));
  }
  return 0;
}

// 动态规划
function cutRopeDp(number) {
  const dp = Array(number + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= number; i += 1) {
    for (let j = 1; j < i; j += 1) {
      dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]));
    }
  }

  return dp[number];
}

module.exports = {
  cutRope,
};
