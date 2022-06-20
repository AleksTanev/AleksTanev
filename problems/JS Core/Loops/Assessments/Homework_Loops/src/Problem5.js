//Problem 5. Min, Max, Sum and Average of N Numbers
let input=['-3','0','-5','-22'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let min=Number.MAX_VALUE;
let max=Number.MIN_VALUE;
let sum=0;
let average=0;
for(let i=1;i<=n;i++){
    let currentNum=+gets();
    min=Math.min(min,currentNum);
    max=Math.max(max,currentNum);
    sum+=currentNum;
}
average=sum/n;
print(`min = ${min}\nmax = ${max}\nsum = ${sum}\navg = ${Math.trunc(average*100)/100}`);



