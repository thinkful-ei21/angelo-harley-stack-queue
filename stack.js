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

module.exports = Stack;