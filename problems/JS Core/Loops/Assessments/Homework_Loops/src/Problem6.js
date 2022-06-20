//Problem 6. Word or Number
let input=['good'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);


let text=gets(); //input is treated as string
let regexNumeric='^-?[0-9]\\d*(\\.\\d+)?$';
let isNumeric=false;
if(text.match(regexNumeric)){
    isNumeric=true;
}

if(isNumeric){
    let output=Number(text);
    print(++output);
}else{
    let output='';
    for(let i=text.length-1;i>=0;i--){
       //output=output.concat(text.charAt(i));
       output+=text.charAt(i);
    }
    print(output);
}