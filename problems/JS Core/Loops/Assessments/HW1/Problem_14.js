// Write a program that reads from the console a positive integer number n (1 ≤ n ≤ 20) and prints a matrix holding the numbers from 1 to n*n
// in the form of square spiral like in the examples below.

let input = ['5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let results = [];
let n = +gets();
let counter = 1;
let startColumn = 0;
let endColumn = n - 1;
let startRow = 0;
let endRow = n - 1;

for (let i = 0; i < n; i++) {
    results.push([]);
}

while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
    }
    endRow--;

    // Start column
    for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
    }
    startColumn++;
}

print(results);



    





