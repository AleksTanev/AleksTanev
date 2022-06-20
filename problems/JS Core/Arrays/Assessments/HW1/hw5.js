const input = ['18 7 8 11 11 7 5 15 10'];
const gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
const print = this.print || console.log;

let array = gets().split(' ');

let bigNum = 0;
let bigestNum = 0;


for (let i = 0; i < array.length; i++) {
  let currNum = Number (array[i]);
 if (bigestNum === currNum) {
     bigNum = bigestNum;
 }
  if (currNum > bigestNum) {
      bigestNum = currNum;
  }
  
}

for (let i = 0; i < array.length; i++) {
    let curNum = Number (array[i]);

   if(curNum > bigNum && curNum !== bigestNum) {
        bigNum = curNum;
    }
}

print(`${bigestNum} ${bigNum}`);
