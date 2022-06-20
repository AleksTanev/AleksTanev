let input = [
    '8 7 8 11 7 11 5 8 10'	
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//Write a program that finds the two biggest numbers from an array of integers



let arr = gets().split(' ');
let i;
let largest = second = Number.MIN_VALUE;

for(i = 0; i < arr.length; i++){
    if(+arr[i]>largest){
        largest = +arr[i];
    }
}
for(i = 0; i < arr.length; i++){
    if(+arr[i]>second && +arr[i]<largest){
        second = +arr[i]
    }
}



print(`${largest} ${second}`)