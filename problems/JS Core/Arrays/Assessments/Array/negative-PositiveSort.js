let input = [
    '7 2 -2 1 -5 4 5 -3 1'	
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



// Write a program that moves all negative numbers to the beginning and all positive to the end, 
// without changing the order of positive negative

let arr = gets().split(' ');
let newArr = []
for(i = 0; i < arr.length; i++){
    if(arr[i] < 0){
       newArr.unshift(arr[i]);
       
    }else{
        newArr.push(arr[i])
    }

}

console.log(newArr)