let input = [
  '3',
  '6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let m = +gets();

if (n < m) {
  let num = n;
  let product = 1;
  while (num <= m) {
    product = product * num;
    num++;
  }

  console.log(`Product[${n}..${m}] = ${product}`);
} else {
  console.log(`Error: n (${n}) should be smaller than m (${m})!`);
}
