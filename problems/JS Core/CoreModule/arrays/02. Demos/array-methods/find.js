const people = ['Ivan', 'Maria', 'Stoyan', 'Stoyan', 'Petar', 'Iva'];

const person = people.find(function (person) {
  return person.startsWith('S');
});

console.log(person);
