'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    this.top = new _Node(data, this.top);
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const popped = this.top;
    this.top = popped.next;
    return popped.data;
  }
}

function peek(stack) {
  if (stack.top === null) {
    return null;
  }
  return stack.top.data;
}

function display(stack) {
  let last = stack.top;
  while (last !== null) {
    console.log(last.data);
    last = last.next;
  }
  if (last === null) {
    return last;
  }
}

module.exports = {Stack, peek, display};