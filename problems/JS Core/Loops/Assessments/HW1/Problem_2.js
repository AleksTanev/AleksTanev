// Write a program that enters from the console a positive integer n and prints all the numbers from 1 to n not divisible by 3 or 7, 
// on a single line, separated by a space.

let input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let output = '';

for (let i = 1; i <= number; i++){
  if (i % 3 === 0){
    continue;
  } else if (i % 7 === 0){
    continue;
  }
  output += i + ' ';
} 

print(output);

    





