// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

var stack = []
var minStack = []

function push(node) {
  stack.push(node)
  let min = Math.min.apply(this, stack)
  minStack.push(min)
}

function pop() {
  if (stack.length > 0) {
    minStack.pop()
    return stack.pop()
  }
  return null
}

function top() {
  if (stack.length > 0) {
    return stack[0]
  }
  return null
}

function min() {
  if (stack.length > 0) {
    return minStack[minStack.length - 1]
  }
  return null
}