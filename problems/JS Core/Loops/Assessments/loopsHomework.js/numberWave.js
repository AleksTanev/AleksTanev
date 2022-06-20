function waveNumbers(input){
    let num = input[0];
    let output = ' ';
for(let i = 1; i < num; i++){
    output = `${output} ${i}`
}
for(let j = num; j >= 1; j--){
    output = `${output} ${j}` 
     
}
console.log(output);
}
waveNumbers(['6']);