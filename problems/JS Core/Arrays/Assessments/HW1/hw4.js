const input = ['5 4 6 7']
// const input = ['7 8 9 10 11 12 13'];
const gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
const print = this.print || console.log;
let result;
let array = gets().split(' ');


for (let i = 0; i < array.length -1; i++) {
    let curNum = Number (array[i]);
    let nextNum = Number (array[i + 1]);
if (curNum < nextNum) {
    result = 'yes';
}
else if (curNum > nextNum) {
    result = 'no';
    break;
}
}
print(result);