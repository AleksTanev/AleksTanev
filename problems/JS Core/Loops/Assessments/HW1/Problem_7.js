// Write a program that generates and prints all possible cards from a standard deck of 52 cards (without the jokers).

// The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).
// The card faces should start from 2 to A.
// Print each card face in its four possible suits: clubs, diamonds, hearts and spades.
// Use 2 nested for-loops and a switch-case statement.

let input = [];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let result = '';
let cards = [];
cards[0] = ' of spades, '; 
cards[1] = ' of clubs, '; 
cards[2] = ' of hearts, ';
cards[3] = ' of diamonds'; 
 
 
for (let i = 2; i <= 14; i++){
    let temp = i;

    switch(i){
        case 11:
            i = 'J';
            break;
        case 12:
            i = 'Q';
            break;
        case 13:
            i = 'K';
            break;
        case 14:
            i = 'A';
            break;
    }

    for (let j = 0; j <= 3; j++){
        result += i + cards[j];

        if (j == 3){
            i = temp;
            result += '\n';
        }
    }
}
 
print(result);

    





