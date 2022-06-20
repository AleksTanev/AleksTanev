// let input = ['teleric', 'telerik'];
let input = ['own', 'owned'];

let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
let print = this.print || console.log;

let firstWord = gets();
let secondWord = gets();
let maxLenght = Math.max(firstWord.length, secondWord.length);
let num = 0;

if(firstWord.length > secondWord.length) {
  print('first');
} else if(firstWord.length < secondWord.length) {
  print('second');
}

for (let i = 0; i < maxLenght; i++) {
  let letterFWord = firstWord.charCodeAt(i);
  let letterSWord = secondWord.charCodeAt(i);
  if (letterFWord < letterSWord) {
    print('first');
  } else if (letterFWord > letterSWord) {
    print('second');
  } else if (letterFWord === letterSWord) {
    num += 1;
  } else if (letterFWord !== letterSWord) {
    num -= 1;
} 
}
if (num === firstWord.length) {
  print('equal');
}
