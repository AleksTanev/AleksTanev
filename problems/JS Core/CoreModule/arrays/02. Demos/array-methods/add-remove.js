const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];

console.log(people.length);

people.pop(); // pop() actually returns the removed value
console.log(`People after removing the last one pop(): ${people}`);

people.push('Georgi');
console.log(`People after adding Georgi as the ast person push(): ${people}`);

people.shift(); // shift() actually returns the removed value
console.log(`People after removing the first one shift(): ${people}`);

people.unshift('Iva');
console.log(`People after adding Iva as he first person unshift(): ${people}`);

console.log()

