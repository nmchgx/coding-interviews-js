// https://www.nowcoder.com/practice/0e26e5551f2b489b9f58bc83aa4b6c68

// 请实现一个函数，将一个字符串s中的每个空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

// 数据范围: \0≤len(s)≤1000 。保证字符串中的字符为大写英文字母、小写英文字母和空格中的一种。

function replaceSpace(s) {
  return s.replace(/\s/g, '%20');
}

module.exports = {
  replaceSpace,
};
