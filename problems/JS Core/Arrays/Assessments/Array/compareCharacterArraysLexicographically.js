let input = [
    'omg',
    'omg'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let firstStr = gets();
let secondStr = gets();

//returns a positive number if the reference string is lexicographically greater than the compare 
// string and negative number if the reference string is lexicographically 
// smaller than the compare string and zero (0) if the compare and reference strings are equivalent.


let compare = firstStr.localeCompare(secondStr);


if(compare === 1){
    print('Second ');
}else if(compare === -1){
    print('First')
}else{
    print('Equal')
}