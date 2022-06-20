// Write a program that reads from the console a sequence of n integer numbers and returns these numbers on a single line
// with the correct sign (<, > or =) between the numbers.

let input = [
    '3',
    '2',
    '5',
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = +gets();
let result = '';
let previousNumber = 0;

for (let i = 1; i <= numbers; i++){
  let currentNumber = +gets();
  
  if (previousNumber > currentNumber){
    result += '>' + currentNumber;
  } else if (previousNumber < currentNumber){
    result += '<' + currentNumber;
  } else {
    result += '=' + currentNumber;
  }
  previousNumber = currentNumber;
}

print(result.substring(1));


    





