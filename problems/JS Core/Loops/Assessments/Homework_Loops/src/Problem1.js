//Problem 1. Numbers from 1 to N
//Write a program that enters from the console a positive integer n and prints
// all the numbers from 1 to n, on a single line, separated by a space.
let input=['5'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let output="";

for (let index = 1; index <=n; index++) {
    output+=index+" ";
}
print(output);