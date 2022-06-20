
const input = ['7 2 -2 1 -5 4 5 -3 1'];
const gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
const print = this.print || console.log;

let arr = gets().split(" ");
print(arr);
let n = arr.length;
let newArr = [];
for (let i = 0; i < n; i++) {
 if (arr[i] > 0) {
newArr.push(arr[i]);
 } else if (arr[i] < 0) {
     newArr.unshift(arr[i]);
 }
}
print(newArr);