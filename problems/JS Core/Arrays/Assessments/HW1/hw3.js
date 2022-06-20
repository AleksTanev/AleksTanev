
const input = ['2 1 1 2 3 3 2 2 2 1'];
const gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
const print = this.print || console.log;

let array = gets().split(' ');
let maxSequence = 0;
let currSequence = 1;

for (let i = 0; i < array.length - 1; i++) {
  let currEl = array[i];
  let nextEl = array[i + 1];

  if (currEl === nextEl) {
    currSequence++;
  } else {
    currSequence = 1;
  }

  if (maxSequence < currSequence) {
    maxSequence = currSequence;
  }
}

print(maxSequence);