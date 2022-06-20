const input = ['2 4 2 4 2 7 2'];
const gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
const print = this.print || console.log;

let arr = gets().split(" ").map(Number);
let no = false;

for (let i=0; i < arr.length; i++) {
  if (i > 0) {
    if ((i % 2) === 0) {
      // ЧЕТНО i
      if (arr[i] < arr[i-1]) {
        no = true;
      }
    }
    else {
      // НЕЧЕТНО i
      if (arr[i] > arr[i-1]) {
        no = true;
      }
    }
  }
}

if (no === true)
{
  print("No");
} else {
  print("Yes");
}