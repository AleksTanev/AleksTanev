let input = [
    '3 4 5 3 4 5'	
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//Write a program that finds if an array of numbers is symmetric - that is, 
//the first number is equal to the last, the second - to the second last and so on

let arr = gets().split(' ');
let chunk = 0;
if(arr.length % 2 === 0){
    chunk = +arr.length/2;
}else if(arr.length % 2 !== 0){
    chunk = Math.ceil(+arr.length/2);
}
let arrOne = arr.slice(0,chunk);

let arrTwo = arr.slice(arr.length-1, chunk);

for(i = arr.length-1; i>=chunk; i--){
    arrTwo.push(arr[i])
}

let result;
if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
       result = arrTwo.indexOf(arrOne[i]) !== -1;
      if (result === false) {
        break;
      }
    }
  }if(result!==false)
{
    print('Yes')
}else{
    print('No')
}