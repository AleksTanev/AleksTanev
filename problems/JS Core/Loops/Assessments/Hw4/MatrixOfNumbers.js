let input = ['10']
let gets =
this.gets ||
(
(arr,index)=>()=>
arr[index++]
)(input,0);
let print = this.print || console.log

let n = +gets()
let number=''



   
for(let row = 1 ;row<=n; row++){
    let thisLine=' '

for(let col = row; col<n+row; col++){
    thisLine+=col+' '
    }
    console.log(thisLine);
}