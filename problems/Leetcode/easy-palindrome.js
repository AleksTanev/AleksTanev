let x = 12121

function checksPalindrome(x) {
    let stringX = String(x)
    let isPalindrome = true
    let n = stringX.length
    let i = 0
    while (isPalindrome && i < Math.floor(n/2)) {
        isPalindrome = (stringX[i] === stringX[n-1-i]) ? true : false
        i++
    }
    return console.log(isPalindrome)
}

checksPalindrome(x)