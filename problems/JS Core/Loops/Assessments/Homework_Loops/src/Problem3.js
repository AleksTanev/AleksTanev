//Problem3 NumberWave
//Write a program that reads from the console a positive integer number n and prints a "wave" i.e. 
//the numbers from 1 to n and then the numbers from n - 1 to 1 on a single line separated by space.

let input=['12'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let result="";
for(let i=1;i<=n;i++){
    result+=i+" ";
}
for(let i=n-1;i>=1;i--){
    result+=i+" ";
}
print(result);
