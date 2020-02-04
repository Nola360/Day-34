// const people = ['James', 'Kyle', 'Craig'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);


function getPeople() {
  return ['James', 'Kyle', 'Craig'];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// OBJECT DESTRUCTURING
const person = {
  name: 'James',
  age: 96,
  city: 'Virgin Islands',
  height: '6\'11',
  greeting: function () {
    console.log('I come in peace!!')
  }
}


const { name, age, city, height, greeting } = person;

console.log(name, age, city, height)



