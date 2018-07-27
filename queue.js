'use strict';

class _Node {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;
    this.first.next = null;
    return this.first;
  }

}

function queuePeek(queue) {
  return queue.first;
}

function queueDisplay(queue) {
  let node = queue.first;

  if (!node) {
    return 'no queue';
  }
  while (node !== null) {
    console.log(node.value);
    node = node.prev;
  }
}

module.exports = {Queue, queuePeek, queueDisplay};