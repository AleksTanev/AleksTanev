let input = [13]
let gets =
this.gets ||
(
(arr,index)=>()=>
arr[index++]
)(input,0);
let print = this.print || console.log

let n = +gets()
let line = ''
let number=''
for(let i = 0;i < n; i++) {
    number+=i+' ';
    let line = ''
}
for(let i = 12; i >=1;i--){
  number+=i+' ';
}
  console.log(number)

  