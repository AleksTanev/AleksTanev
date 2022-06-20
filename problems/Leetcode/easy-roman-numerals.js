// let s = 'XIIIX'
let s = 'MCMXCIV'

let arrS = s.split('')

function gets(a) {
    let symbols = ['I','V','X','L','C','D','M']
    let values = [1,5,10,50,100,500,1000]
    return values[symbols.indexOf(a)]
}

let sum = 0

for (let i = 0; i<arrS.length;i++) {
    if (arrS[i]+arrS[i+1] === 'IX' || arrS[i]+arrS[i+1] === 'IV' || arrS[i]+arrS[i+1] === 'XL' || arrS[i]+arrS[i+1] === 'XC' ||
    arrS[i]+arrS[i+1] === 'CD' || arrS[i]+arrS[i+1] === 'CM') {
        sum += gets(arrS[i+1]) - gets(arrS[i])
        i++
        continue
    } else {
    sum += gets(arrS[i])
    }
}

console.log(sum)

// https://leetcode.com/problems/roman-to-integer/