// let input = ['3','1','2','3','1','2','3']
let input = ['4', '2', '3', '3', '3','5','7','8','3']

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)


let N = +gets()
let numberArray = input.map(Number).slice(1,input.length)

let arrayUno = []
let arrayDuo = []

for (let i = 0; i < N; i++) {
    arrayUno[i] = numberArray[i]
    arrayDuo[i] = numberArray[i+N]
}

print(arrayUno)
print(arrayDuo)

if (arrayUno.toString() == arrayDuo.toString()) {
    print('Equal')
} else {
    print('Not equal')
}


// shorter version:

// let array = [3,1,2,3,1,2,3];
// let array = [3,2,4,6,2,4,6];
// let print = this.print || console.log;
// let n = array[0];
// let j = 0
// for(let i = 1;i <= n; i++){
//     if(array[i] !== array[array.length-n+j]){
//         print('Not equal');
//         break;
//     }else{
//         if(i === n)
//             print('Equal');
//     }
//     j++;
// }
