let input = [
    '3',
    '2',
    '4',
    '6',
    '6',
    '4',
    '2'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let firstArr = [];
let secondArr = [];
for(i = 0; i < n; i++){
    let values = gets();
    firstArr += values + ' '
}
for(i = 0; i < n; i++){
    let values = gets();
    secondArr += values + ' ';
}

if(firstArr === secondArr){
    print('Equal')
}else{
    print('Not equal')
}
