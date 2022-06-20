// Write a program that reads from the console a sequence of n integer numbers and returns the minimal, the maximal number, 
// the sum and the average of all numbers (displayed with 2 digits after the decimal point).

// The input starts by the number n (alone in a line) followed by n lines, each holding an integer number.
// The output is like in the examples below.

let input = [
    '3',
    '2',
    '5',
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfInputs = +gets(); 
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let sum = 0;

for (let i = 0; i < numberOfInputs; i++){
    let currentNumber = +gets();
    if (currentNumber < min){
        min = currentNumber;
    }
    if (currentNumber > max){
        max = currentNumber;
    }
    sum = sum + currentNumber;
}

let avg = sum / numberOfInputs;
    
print(`min = ${min}`);
print(`max = ${max}`);
print(`sum = ${sum}`);
print(`avg = ${(Math.floor(avg * 100) / 100).toFixed(2)}`);


    





