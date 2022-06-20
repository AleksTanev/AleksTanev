// let input = ['3', '1', '2', '3', '1', '2', '3'];
let input = ['4', '1', '2', '3', '4', '1', '2', '3', '4'];
// let input = ['3', '2', '4', '6', '6', '4', '2'];
// let input = ['4', '1', '2', '4', '6', '1', '6', '4', '2'];

let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
let print = this.print || console.log;

let n = +gets();
let arraysA = [];
let arraysB = [];
let a;
let b;
// let arraysCompares = [];
for (let i = 1; i <= n; i++) {
    let numberFirstHalf = +gets();
    arraysA.push(numberFirstHalf);
    a = arraysA.join('');
}

for (let i = 1; i <= n; i++) {
    let numberSecondsHalf = +gets();
    arraysB.push(numberSecondsHalf);
    b = arraysB.join('');
}

if (a === b) {
    print('Equal');
} else {
    print('Not equal');
}
