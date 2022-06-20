//Problem 2. Numbers Not Divisible by 3 and 7
//Write a program that enters from the console a positive integer n and prints 
//all the numbers from 1 to n not divisible by 3 or 7, on a single line, separated by a space.

let input=['-8'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let result="";

for(let i=1;i<=n;i++){
    if(i%3===0||i%7===0){
        continue;
    }else{
        result+=i+" ";
    }
}

print(result);

