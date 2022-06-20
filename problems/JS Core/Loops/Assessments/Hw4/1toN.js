let input = [ 16 ];
let gets =
this.gets ||
(
(arr,index)=>()=>
arr[index++]
)(input,0);
let print = this.print || console.log

let n = +gets()
let number=''

for(let i =1; i<n; i++){
 number+=i+' ';
//  if(i<n){
//      number+='';
// }
}
print (number)