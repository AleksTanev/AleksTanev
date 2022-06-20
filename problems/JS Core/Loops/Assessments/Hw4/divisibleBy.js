let input = [18];
let gets =
this.gets ||
(
(arr,index)=>()=>
arr[index++]
)(input,0);
let print = this.print || console.log

let n = +gets()
let number=''
  for (let i=0;i<n;i++) {
  if(i % 3 !== 0 && i % 7 !== 0){
    number+=i+' ';
  }
}
console.log (number) 
  






