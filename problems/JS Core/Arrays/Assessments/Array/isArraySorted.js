let input = [
    '7 8 9 10 11 12 11 13 9'	
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//Write a program that determines if an array of numbers is sorted in increasing order.
 
let arr = gets().split(' ')

let isTrue=true;


for(i = 0; i <= arr.length; i++){
    let currInp = arr[i];
    let nextInp = arr[i+1];

    if(Number(currInp) < Number(nextInp)){
        isTrue=true;
        
        }else if(Number(currInp) > Number(nextInp)){
            isTrue=false;
            break;
    }
}


if(isTrue){
    print('Yes')
}else{
    print('No')
}