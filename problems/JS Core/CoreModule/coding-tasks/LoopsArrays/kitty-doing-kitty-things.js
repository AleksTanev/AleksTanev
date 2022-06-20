let print = this.print || console.log

// let input = [
//     '@@@xx@*',
//     '1 -1 -1 4',
// ]

let input = [
    "@*@*@*xxx",
    "1 -1 1 -1 2 1 1 1 1 1 1"
]


// we replace the uncomfortable * character with more friendly F for food
const minimap = Array.from(input[0].replace(/[*]/g,'F'))

const moves = input[1].split(' ').map(Number)



let position = 0                // this is the current position on the map
let length = minimap.length     // this is the length of the map
let step = -1       // we will use this as an iterator throught the loop and go through moves[] array
let food = 0
let deadlocks = 0
let souls = 0 
let right           // a boolean to show if we are moving left or right


do {

    // if the map position is @ we get the soul, and leave null
    if (minimap[position] === '@') {

        souls++
        minimap[position] = null
    
    // if the map position is F we get the food, and leave null
    } else if (minimap[position] === 'F') {

        food++
        minimap[position] = null
    
    // if the map position is x we get deadlocked...
    } else  if (minimap[position] === 'x') {
        
        // if the position is even and we have food, we leave F
        if ( position % 2 === 0 && souls > 0) {

            minimap[position] = '@'
            souls--
            deadlocks++
        
        // if the position is odd and we have souls, we leave @
        } else if (position % 2 !== 0 && food > 0) {

            minimap[position] = 'F'
            food--
            deadlocks++
        
        // else we don't have anything to get away, and kitty is stuck
        } else {
            print(`You are deadlocked, you greedy kitty!\nJumps before deadlock: ${(step+1)}`)
            break
        }
    }

    // iterating the while loop, also used to go through the moves[] array.
    step++

    // printing if kitty didn't get deadlocked
    if (step === moves.length) {
        print(`Coder souls collected: ${souls}\nFood collected: ${food}\nDeadlocks: ${deadlocks}`)

        break
    }

    // here we determine the next position

    right = (moves[step] > 0) ? true : false
    let temp = position

    if (right) {
        position = (temp + moves[step] % length) % length
    } else {
        let offset = (temp - (Math.abs(moves[step]) % length)) % length
        position = (offset < 0) ? Math.abs(length + offset) : offset
    }


    print(minimap)

} while (step<moves.length)