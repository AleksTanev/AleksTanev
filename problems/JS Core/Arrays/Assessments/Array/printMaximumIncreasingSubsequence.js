let input = [
    '6 7 3 8 1 9 4 5 6 2 1 3'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Write a program that prints the maximum length increasing subsequence to the console. 
// If two or more are of the same length, print the last one

let arr = gets().split(' ');
let maxSubs = 1;
let subsequence = ' ';
for(i = 0; i < arr.length; i++){
    
    if(arr[i] == (arr[i+1]+1)){
        maxSubs++;
        subsequence += arr[i];
    }else{
        maxSubs = 1;
    }
}print(subsequence)