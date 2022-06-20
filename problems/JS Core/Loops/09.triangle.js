let input = [
  '9',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let line = '';

for (row = 1; row <= n; row++) {

  line = line + '*';

  // for (let column = 1; column <= row; column++) {
  //   line = line + '*';
  // }
  print(line);
}
