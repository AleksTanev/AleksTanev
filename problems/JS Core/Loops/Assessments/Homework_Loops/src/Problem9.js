//Problem 9. Matrix of Numbers
//Write a program that reads from the console a positive integer number n (1 ≤ n ≤ 20) 
//and prints a matrix like in the examples below.

//Use two nested loops.
let input=['7'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();

for(let i=1; i<=n; i++){
    //controls num of rows
    let currentLine='';
    for(let j=0; j<n; j++){
        //controls num elements and each element on each row
        currentLine+=i+j+' ';
    }
    print(currentLine);
}
