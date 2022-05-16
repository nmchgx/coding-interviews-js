// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

var stack1 = []
var stack2 = []

function push(node) {
  stack1.push(node)
}

function pop() {
  if (stack1.length === 0 && stack2.length === 0) {
    return null
  }
  if (stack2.length === 0) {
    var l = stack1.length
    for (let i = 0; i < l; i++) {
      stack2.push(stack1.pop())
    }
  }
  return stack2.pop()
}