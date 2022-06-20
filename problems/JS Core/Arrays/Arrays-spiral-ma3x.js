let input = ['5'];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let n = +gets()
let array
let matrix = []


//          Top Row
for (let i = 1; i<=n ; i++) {
    let currArray = [i]
    matrix.push(currArray)
}

print(array)

//          in between Top and Bot rows

if (n>2) {
    let N = n-2     // number of rows additionally

}

//          Bottom Row

for (let i = 2*n-1;i<=3*n-2;i++) {
    let currArray = [i]
    array.push(currArray)
}

print(array)