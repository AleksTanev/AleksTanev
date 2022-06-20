// let input = ['6 7 3 8 1 9 4 5 6 2 1 3'];
let input = ['1 2 3 4 3 1 9 4 5 6 11'];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let array = gets().split(' ').map(Number);
let maxSequence = [];
 
for (let i = 0; i < array.length; i++) {
    let currentNum = [array[i]];
    
    for (let k = i + 1; k < array.length; k++) {
        let lastNum = currentNum[currentNum.length - 1];
        if (lastNum >= array[k]) {
        break;
        }
        currentNum.push(array[k]);
    }
 
    if (maxSequence.length <= currentNum.length) {
        maxSequence = currentNum;
    }
}
 
print(maxSequence.join(' '));