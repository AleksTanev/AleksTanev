let input = [

    'Telerik Academy', 

    '31 Al. Malinov, Sofia',

    '+359 888 55 55 555',

    '',

    'http://telerikacademy.com/',

    'Martin',

    'Veshev',

    '25',

    '+359 2 981 981'

]

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let companyName = gets()
print(companyName)

let address = gets()
print(`Address: ${address}`)

let tel = gets()
print(`Tel. ${tel}`)

let fax = gets()
print(`Fax: ${fax}`)

let website = gets()
print(`Website: ${website}`)

let firstName = gets()
let lastName = gets()
let age = gets()
let mobile = gets()

print(`Manager: ${firstName} ${lastName} (age: ${age}, tel. ${mobile})`)