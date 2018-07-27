'use strict';

const {Stack, peek, display} = require('./stack');
const {Queue, queuePeek, queueDisplay} = require('./queue');

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
    
  starTrek.pop();
  starTrek.pop();
  // display(starTrek);

  // is_palindrome("A man, a plan, a canal: Panama");
  //   console.log(matching('()"('));
  //   console.log(matching('\'\''));
  //   console.log(matching("([)]"));
  //   console.log(peek(new Stack()));

//   const test_data = [1, 4, 1, 7, 7, 2, 10, 1];
//   let test_stack = new Stack();
//   test_data.forEach(item => test_stack.push(item));
//   display(test_stack);
//   display(sortStack(test_stack));

let queue = new Queue();
queue.enqueue('Kirk');
queue.enqueue('Spock');
queue.enqueue('McCoy');
queue.enqueue('Scotty');
queue.dequeue();
queue.dequeue();
queueDisplay(queue);
}

main();

function is_palindrome(input) {
  input = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();
  for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);
  }

  let string = '';

  for (let j = 0; j < input.length; j++) {
    string += stack.pop();
  }

  console.log(string === input);

  display(stack);

}

// ( -> push
// ) -> compare popped with '('
// if popped = (, keep going
// if popped !== (, unmatched

function matching(input) {
  let stack = new Stack();
  let quotes = false;

  if (stack.top !== null) {
    return 'unmatched paren';
  }

  for (let i = 0; i < input.length; i++) {
    if (!quotes) {
      if (input[i] === '(') {
        stack.push(input[i]);
      }
    
      if (input[i] === '{') {
        stack.push(input[i]);
      }
    
      if (input[i] === '[') {
        stack.push(input[i]);
      }
    
      if (input[i] === ')') {
        if (stack.pop() !== '(') {
          return 'unmatched paren';
        }
      }

      if (input[i] === '"') {
        stack.push(input[i]);
        quotes = true;
      }

      if (input[i] === '\'') {
        stack.push(input[i]);
        quotes = true;
      }

      if (input[i] === '}') {
        if (stack.pop() !== '{') {
          return 'unmatched paren';
        }
      }
      if (input[i] === ']') {
        if (stack.pop() !== '[') {
          return 'unmatched paren';
        }
      }
    } else {
      if (input[i] !== '"' && input[i] !== '\'') {
        return 'unmatched quotes';
      }

    }
  }

  return 'matched';
}

function sortStack(stack) {
  let helper_stack = new Stack();
  let popped = stack.pop();
  let sorted = false;
  while(!sorted){
    sorted = true;
    while(peek(stack) !== null) {
      if (popped <= peek(stack)) {
        helper_stack.push(popped);
        popped = stack.pop();
      } else {
        let null_check = stack.pop();
        if (null_check !== null) {
          helper_stack.push(null_check);
          sorted = false;
        }
      }
    }
    while(popped !== null) {
      stack.push(popped);
      popped = helper_stack.pop();
    }
  }

  console.log('sortStack ran');
  return stack;
}

//[1, 4, 1, 7, 7, 2, 10, 1]
//popped =
//popped2 =
//[]

//goal -> [7, 4, 3, 2, 1, 1]