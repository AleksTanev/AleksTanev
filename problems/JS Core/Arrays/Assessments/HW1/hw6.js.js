// const input = ['1 2 3 4 4 3 2 1'];
// const input = ['7 8 9 8 7'];
const input = ['3 4 5 3 4 5'];
const gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
const print = this.print || console.log;

let arrayFull = gets().split(' ');
let arrayFront = [];
let arrayBack = [];

if (arrayFull.length % 2 === 0) {
    for(let i = 0; i < arrayFull.length /2; i++) {
        arrayFront.push(arrayFull[i]);
    }
    for(let i = arrayFull.length -1; i >= arrayFull.length / 2; i--) {
        arrayBack.push(arrayFull[i]);
    }
    let front = arrayFront.join('');
    let back = arrayBack.join('');
    
    if (front === back) {
        print('yes');
    }else if (front !== back){
        print('no');
    }
}


if (arrayFull.length % 2 !== 0) {
    for(let i = 0; i < (arrayFull.length - 1) / 2; i++) {
        arrayFront.push(arrayFull[i]);
    }
    for(let i = arrayFull.length -1; i > (arrayFull.length - 1) / 2; i--) {
        arrayBack.push(arrayFull[i]);
    }
    let front = arrayFront.join('');
    let back = arrayBack.join('');
    
    if (front === back) {
        print('yes');
    }else if (front !== back){
        print('no');
    }
}