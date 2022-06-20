// Write a program that enters from the console a positive integer n and prints all the numbers from 1 to n not divisible by 3 or 7, 
// on a single line, separated by a space.

let input = [
    '6'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let outputStart = '';
let outputEnd = '';

for (let i = 1; i < number; i++){
  outputStart += i + ' ';
} 

for (let i = number; i > 0; i--){
  outputEnd += i + ' ';
} 

print(`${outputStart}${outputEnd}`);

    





