// Write a program that reads text from the console. Check if this text is a number or a word. If the text is a word print it reversed on the console. If it is a number add 1 to it and print it.

// The input is text on a single line (without intervals).
// If the input is a word it won't contain any digits!
// The output is like in the examples below.

let input = [
    'good',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let userInput = gets();
let resultAsText = '';
let resultAsNumber;

if (Number(userInput)){
    resultAsNumber = Number(userInput) + 1;
    print(resultAsNumber.toFixed(2));
} else {
    for (let i = userInput.length - 1; i >= 0; i--){
        resultAsText += userInput.charAt(i);
    }
    print(resultAsText);
}


    





