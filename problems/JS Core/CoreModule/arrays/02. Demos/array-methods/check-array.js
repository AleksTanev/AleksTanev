const people = ['Ivan', 'Maria', 'Stoyan', 'Stoyan', 'Petar', 'Iva'];

console.log(`Maria is at index: ${people.indexOf('Maria')}`);
console.log(`Georgi is not found: ${people.indexOf('Georgi')}`);
console.log(`Stoyan's last occurrence index: ${people.lastIndexOf('Stoyan')}`);
console.log(`Is Iva in the array: ${people.includes('Iva')}`);
console.log(`Is Georgi in the array: ${people.includes('Georgi')}`);
