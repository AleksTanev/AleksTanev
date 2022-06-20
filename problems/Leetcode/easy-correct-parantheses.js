let s = '[{}]{}' 
// let s = '[][]' 

let arrS = s.split('')
let isTrue = true

if (arrS.length % 2 !== 0) {
    isTrue = false
} else {

    for (let i = 0; i<arrS.length;i++) {
        if (arrS[i] === '(' && (arrS.indexOf(')') + arrS.indexOf('('))%2 === 1 ) {
            arrS.splice(i,1)
            arrS.splice(arrS.indexOf(')'), 1)
            i--
            continue
        }

        else if (arrS[i] === '[' && (arrS.indexOf(']') + arrS.indexOf('['))%2 === 1 ) {
            arrS.splice(i,1)
            arrS.splice(arrS.indexOf(']'), 1)
            i--
            continue
        }

        else if (arrS[i] === '{' && (arrS.indexOf('}') + arrS.indexOf('{'))%2 === 1 ) {
            arrS.splice(i,1)
            arrS.splice(arrS.indexOf('}'), 1)
            i--
            continue
        } else {
            isTrue = false
            break
        }
    }
}

console.log(isTrue)