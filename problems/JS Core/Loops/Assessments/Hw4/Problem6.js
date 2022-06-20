let input = [ 1 ];
let gets =
this.gets ||
(
(arr,index)=>()=>
arr[index++]
)(input,0);
let print = this.print || console.log

let n = +gets()
let text='river '
let reversedtext='river '
console.log(text.charAt(text.length-1));

for(let position = text.length -1;position>=0;position --){
    reversedtext+=text.charAt(position);
    
}
console.log(reversedtext)
 