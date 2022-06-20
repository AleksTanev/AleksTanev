//Problem 8. Calculate 1 + 1!/X + 2!/X^2 + … + N!/X^N
//Write a program that, for a given two integer numbers n and x, calculates the sum S = 1 + 1!/x + 2!/x2 + … + n!/x^n.

//Use only one loop. Print the result with 5 digits after the decimal point.
//Note that each element can be calculated from the previous by this "formula": (previous_element) * i / x

let input=['4','3'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let x=+gets();
let s=1;
let previous_element=1;

for(let i=1; i<=n; i++){
    let currentElement=previous_element*i/x;
    s+=currentElement;
    previous_element=currentElement;
}

print(s.toFixed(5));