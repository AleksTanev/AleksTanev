//Problem 10. Word or Number 2
//You are given an integer number n and then n new lines of text: numbers or words (see Problem 6). 
//This time when we have a word we concatenate it with the previous words with a dash - between them. 
//If we have a number we add it to all previous numbers.

// The input starts by the number n (alone in a line) followed by n lines, each holding a text without a space.
// Again all words contain no digits.
// The output is like in the examples below.
// On the first line there are all words concatenated with - between them or no words if there were no words in the input.
// On the second line is the sum of all the numbers or 0 if there were no numbers.

let input=['5','1','go','1','there','5'];
let print=this.print||console.log;
let gets=this.gets|| ((arr, index) => () => arr[index++])(input,0);

let n=+gets();
let regexNumeric='^-?[0-9]\\d*(\\.\\d+)?$';
let outputString='';
let outputSum=0;

for(let i=1;i<=n;i++){
    let current=input[i];
    if(current.match(regexNumeric)){//current element is numeric
        outputSum+=Number(current);
    }else{//current element is a word
        outputString=outputString.concat(current)+'-';
    }
}

if(outputString.length===0){
    outputString='no words';
}else{
    outputString=outputString.substring(0,outputString.length-1);
}

print(outputString);
print(outputSum);
