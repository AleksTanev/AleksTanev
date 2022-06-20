// Write a program that reads from the console a positive integer number n (1 ≤ n ≤ 20) and prints a matrix like in the examples below.

// Use two nested loops.

let input = [
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let result = '';


for (let j = 1; j <= number; j++){
    for (let k = j; k < number + j; k++){
        result += k;
    }
    result += "\n";
}

print(result);



    





