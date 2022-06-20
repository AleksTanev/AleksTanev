// You are given an integer number n and then n new lines of text: numbers or words (see Problem 6). 
// This time when we have a word we concatenate it with the previous words with a dash - between them. If we have a number we add it to all previous numbers.

// The input starts by the number n (alone in a line) followed by n lines, each holding a text without a space.
// Again all words contain no digits.
// The output is like in the examples below.
// On the first line there are all words concatenated with - between them or no words if there were no words in the input.
// On the second line is the sum of all the numbers or 0 if there were no numbers.

let input = [ 5, 1, 'go', 1, 'there', 5 ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let sumNumbers = 0;
let sumWords = '';

for (let i = 0; i < n; i++) {
    let getInput = gets();

    if (Number(getInput)) {
        sumNumbers += getInput;
    } else {
        sumWords += getInput + '-';
    }
}

if (sumWords == '') {
    print('no words');
    print(sumNumbers);
} else {
    sumWords = sumWords.slice(0, sumWords.length - 1);
    print(sumWords);
    print(sumNumbers);
}



    





