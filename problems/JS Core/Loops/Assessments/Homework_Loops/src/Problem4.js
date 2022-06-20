//Problem 4. Smaller, greater or equal?
// Write a program that reads from the console a sequence of n integer numbers 
// and returns these numbers on a single line 
// with the correct sign (<, > or =) between the numbers.

let input=['4','-1','4','4','4'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let currentNum=+gets();
let output=''+currentNum;

for(let i=1;i<n;i++){
    let nextNum=+gets();
    if(currentNum>nextNum){
        output+='>'+nextNum;
    }else if(currentNum<nextNum){
        output+='<'+nextNum;
    }else{
        output+='='+nextNum;
    }
    currentNum=nextNum;
}
print(output);
