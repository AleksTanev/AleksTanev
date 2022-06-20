let input = [
    'Telerik, Java, JavaScript, PHP, HTML, CSS, Spring, Angular',
    '3',
    'CSS'
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

const book = gets().split(', ')
const wordsPerPage = +gets()
const searchWord = gets()

const indexOfWord = book.lastIndexOf(searchWord)

if (indexOfWord === -1) {
    print(indexOfWord)
} else {
    print(Math.ceil((indexOfWord + 1)/wordsPerPage))
}