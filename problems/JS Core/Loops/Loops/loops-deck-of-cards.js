let input = [
    '10',
]

let print = this.print || console.log

let a = +input

if (isNaN(a)) {
    for (i=2;i<=10;i++) {
        print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`)
    }
    if (input == 'A') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`)
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`)
        print(`K of spades, K of clubs, K of hearts, K of diamonds`)
        print(`A of spades, A of clubs, A of hearts, A of diamonds`)
    } else if (input == 'K') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`)
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`)
        print(`K of spades, K of clubs, K of hearts, K of diamonds`)
    } else if (input == 'Q') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`)
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`)
    } else if (input == 'J') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`)
    }
} else {
    for (i=2;i<=a;i++) {
        print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`)
    }
}

