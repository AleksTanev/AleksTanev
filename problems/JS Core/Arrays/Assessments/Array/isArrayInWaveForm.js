let input = [
    '2 1 2 1 2 1 2'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Write a program that determines if an array of numbers is in Wave Form -
// e.g. first > second < third > fourth < fifth > ...

let arr = gets().split(' ');
let isTrue = true;

for(i = 0; i < arr.length ; i++){
    let current = arr[i];
    for(k = i + 1; k < arr.length; k++){
        let next = arr[i+1];
        let nextNext = arr[k+1];
        if(next < current && next < nextNext ){
            isTrue = true;
        }
        if (isTrue == true && i % 2 == 0) {
            if (arr[i - 1] <= arr[i - 2]) {
                isTrue = false;
            }
        }
}
}
if(isTrue){
    print('Yes')
}else{
    print('No')
}
