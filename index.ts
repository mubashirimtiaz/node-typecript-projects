interface Person {
  profession: string;
  age: number;
}

const number: number = 55;
const myName: string = 'John';
const fruits: string[] = ['apple', 'banana', 'orange'];
const person: Person = { profession: 'developer', age: 25 };
const isCool: boolean = true;

// console.log(55 === '55');
// console.log(55 == '55');

console.log(myName === myName.toLowerCase());

console.log(undefined == null);

console.log(undefined === null);

console.log(person.profession === 'developer');

// console.log(person.age === '25');

// console.log(
//   person.age > '25' ? 'You are older than 25' : 'You are younger than 25'
// );

if (isCool && person.age >= 25) {
  console.log('You are cool');
} else if (!isCool && person.profession === 'developer') {
  console.log('You are a decent guy');
} else {
  console.log('You are not neither cool nor decent');
}

if (fruits.length > 2 && fruits[0] === 'apple') {
  console.log('You have more than 2 fruits and the first one is apple');
} else {
  console.log('You have less than 2 fruits or the first one is not apple');
}

if (!fruits.length) {
  console.log('empty');
} else {
  console.log('You have fruits');
}

// if (myName.toLowerCase !== 'john') {
//   console.log('You are not John');
// }

const newObj = {
  ...person,
  ...(isCool && { isCool }),
};
