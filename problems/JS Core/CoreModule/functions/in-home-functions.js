// //  1. create a function add which adds two numbers

// const add = (a,b) => {
//     if (typeof a !== 'number') {
//         throw new TypeError(`${a} is not a number`)
//     } 

//     if (typeof b !== 'number') {
//         throw new TypeError(`${b} is not a number`)
//     }

//     return a + b
// }


// try {
//     console.log(add('Telerik', 1))
// } catch (error) {
//     console.log(error)
// }
// console.log(2)


// //  2. create multiply/divide and subtract functions.

// const subtract = (a,b) => {
//     if (typeof a !== 'number') {
//         throw new TypeError(`${a} is not a number`)
//     } 

//     if (typeof b !== 'number') {
//         throw new TypeError(`${b} is not a number`)
//     }

//     return a - b
// }


// const multiply = (multiple_1,multiple_2) => {
//     if (typeof multiple_1 !== 'number') {
//         throw new TypeError(`${multiple_1} is not a number`)
//     } 

//     if (typeof multiple_2 !== 'number') {
//         throw new TypeError(`${multiple_2} is not a number`)
//     }
//     return multiple_1 * multiple_2
// }


// const divide = (numerator,denominator) => {
//     if (typeof numerator !== 'number') {
//         throw new TypeError(`${numerator} is not a number`)
//     } 

//     if (typeof denominator !== 'number') {
//         throw new TypeError(`${denominator} is not a number`)
//     }
//     return numerator / denominator
// }

// 3. Create a type checking funciton:

// const checkIfNumber = function (a) {
//     if (typeof a !== 'number') {
//         throw new TypeError(`${a} is not a number`)
//     }
// }

// const subtract = (a,b) => {
//     checkIfNumber(a)
//     checkIfNumber(b)
//     return a - b
// }

// console.log(subtract(2,3))

// 4. Extend the add() function for any number of arguments.

// const checkIfNumber = function (a) {
//     if (typeof a !== 'number') {
//         throw new TypeError(`${a} is not a number`)
//     }
// }

// const add = (a, b,...numbers) => {
//     let sum = 0

//     for (const num of numbers) {
//         checkIfNumber(num)
//         sum += num
//     }

//     checkIfNumber(a)
//     checkIfNumber(b)

//     return sum + a + b
// }

// console.log(add(2,3,14,1));

// 4. && 5. Create a calculator function that accepts a third parameter, any of the 4 functions we created.

const add = (a,b) => {
    if (typeof a !== 'number') {
        throw new TypeError(`${a} is not a number`)
    } 

    if (typeof b !== 'number') {
        throw new TypeError(`${b} is not a number`)
    }

    return a + b
}

const subtract = (a,b) => {
    if (typeof a !== 'number') {
        throw new TypeError(`${a} is not a number`)
    } 
    
    if (typeof b !== 'number') {
        throw new TypeError(`${b} is not a number`)
    }

    return a - b
}
    
    
const multiply = (multiple_1,multiple_2) => {
    if (typeof multiple_1 !== 'number') {
        throw new TypeError(`${multiple_1} is not a number`)
    } 
    
    if (typeof multiple_2 !== 'number') {
        throw new TypeError(`${multiple_2} is not a number`)
    }
    return multiple_1 * multiple_2
}
    
    
const divide = (numerator,denominator) => {
    if (typeof numerator !== 'number') {
        throw new TypeError(`${numerator} is not a number`)
    } 
    
    if (typeof denominator !== 'number') {
        throw new TypeError(`${denominator} is not a number`)
    }
    return numerator / denominator
}

const calculator = function (a, b,...fns) {
    let sum = []
    for (const fn of fns) {
        sum.push(fn(a,b))
    }
    return sum
}

console.log(calculator(22,11,multiply,add,divide,subtract))