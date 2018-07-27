'use strict';

const {Stack, peek, display} = require('./stack');
const Queue = require('./queue');

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
    console.log(matching('()"('));
    // console.log(matching('[()]'));
    // console.log(matching("([)]"));
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
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            stack.push(input[i])
        }

        if (input[i] === '{') {
            stack.push(input[i]);
        }

        if (input[i] === '[') {
            stack.push(input[i]);
        }

        if (input[i] === ')') {
            if (stack.pop() !== '(') {
                return 'unmatched paren'
            }
        }

        if (input[i] === '"') {
            if (!quotes) {
                stack.push(input[i])
                quotes = true;
            }
            else if (stack.pop() !== input[i]) {
                return 'unmatched quotes'
            }
        }

        if (input[i] === '}') {
            if (stack.pop() !== '{') {
                return 'unmatched paren'
            }
        }
        if (input[i] === ']') {
            if (stack.pop() !== '[') {
                return 'unmatched paren'
            }
        }
    }

    if (stack.top !== null) {
        return 'unmatched paren';
    }

    return 'matched';
}