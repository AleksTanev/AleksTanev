const person = {
  name: 'John',
  age: '20'
}

person.city = 'Sofia';

for (const key in person) {
  console.log(person[key]);
}
