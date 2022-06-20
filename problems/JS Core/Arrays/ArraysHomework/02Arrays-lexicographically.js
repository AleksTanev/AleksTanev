let input = [
    // 'telerik',
    // 'teleric',
    // 'own',
    // 'owned',
    'omg',
    'omg'
]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)


let arrayEin = gets().toLowerCase().split('') // creating the array in lower case as upper case letters have different char code.
let arrayZwei = gets().toLowerCase().split('')


let i = 0

while (i<Math.min(arrayEin.length,arrayZwei.length)) {
    if (arrayEin[i] == arrayZwei[i]) {                        //checking if characters / elements/ values of the same index are eqyal
        i++
        if (arrayEin.length == arrayZwei.length && i == arrayEin.length-1) {  // if yes to all and the arrays are of same length
            print('Equal')
        } else if (arrayEin.length < arrayZwei.length && i == arrayEin.length - 1) {   // if array one is smaller and all checked values are equal
            print('First')
        } else if (arrayZwei.length < arrayEin.length && i == arrayZwei.length-1) { // if array two is smaller and all values are equal
            print('Second')
        }
    } else if (arrayEin[i].charCodeAt() < arrayZwei[i].charCodeAt()) { // if elements are not equal and array one's letter code is smaller 
        print('First')  
        break       
    } else {
        print('Second') // else
        break
    }
    
}