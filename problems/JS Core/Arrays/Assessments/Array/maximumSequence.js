//Write a program that finds the length of the maximum sequence of equal elements in an array of numbers.

let input = [
    '2 1 1 2 3 3 2 2 2 1'	
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let data = gets().split(' ');



let sequence = 0;
let currSequence = 1;
for(i = 0; i < data.length - 1; i++){
    let currInp = data[i];
    let nextInp = data[i+1];
    if(currInp === nextInp){
        currSequence++
    }else{
        currSequence = 1;
    }
    if(sequence < currSequence){
        sequence = currSequence;
    }
    
}print(sequence)